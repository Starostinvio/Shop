import { useCallback, useEffect, useState } from "react";
import Column from "src/modules/ShoppingCart/components/Column/Column";
import ColumnQuantity from "src/modules/ShoppingCart/components/Column/ColumnQuantity";
import Row from "src/modules/ShoppingCart/components/Row/Row";
import Table from "src/modules/ShoppingCart/components/Table/Table";
import Total from "src/modules/ShoppingCart/components/Total/Total";
import ColumnIcon from "src/modules/ShoppingCart/components/Column/ColumnIcon";
import { useStore } from "src/store";
import { Product, ResponseProduct } from "src/types";
import Spinner from "src/ui/Spinner/Spinner";
import numberFormat from "src/utils/number-format";
import { TableHeaders } from "src/modules/ShoppingCart/components/constants";

const ShoppingCartPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  const {
    header,
    products,
    basketTotal,
    basketSummary,
    setProducts,
    removeProduct,
    quantityIncProduct,
    quantityDecProduct,
  } = useStore(
    ({
      header,
      products,
      basketTotal,
      basketSummary,
      setProducts,
      removeProduct,
      quantityIncProduct,
      quantityDecProduct,
    }) => ({
      header,
      products,
      basketTotal,
      basketSummary,
      setProducts,
      removeProduct,
      quantityIncProduct,
      quantityDecProduct,
    })
  );
  const handlerProductsRequest = async () => {
    setIsLoading(true);
    setProducts()
      .then((data) => {
        const correctedData = (data as ResponseProduct[]).map((product) => ({
          ...product,
          Currency: product["Сurrency"],
        }));

        setCartProducts(correctedData);
        basketSummary().finally(() => setIsLoading(false));
      })
      .catch((e) => {
        throw new Error(e);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    handlerProductsRequest();
  }, []);

  useEffect(() => {
    if (!(products.length > 0)) setCartProducts([]);
  }, [products]);

  const handlerPlus = useCallback(
    (id: number) => {
      if (header)
        quantityIncProduct(id, header.UsedGuid).then(() => {
          handlerProductsRequest();
        });
    },
    [header]
  );

  const handlerMinus = useCallback(
    (id: number) => {
      if (header) {
        const currentProduct = cartProducts.find((item) => item.Id === id);
        currentProduct && currentProduct.Quantity > 1
          ? quantityDecProduct(id, header.UsedGuid).then(() => {
              handlerProductsRequest();
            })
          : removeProduct(id, header.UsedGuid).then(() =>
              handlerProductsRequest()
            );
      }
    },
    [header, cartProducts]
  );

  return (
    <div className="max-w-[1280px]  my-0 mx-auto flex flex-col justify-center flex-wrap">
      {isLoading && (
        <div className="fixed top-0 left-0 bottom-0 right-0 flex justify-center items-center">
          <Spinner />
        </div>
      )}

      {cartProducts.length > 0 ? (
        <>
          <Total
            totalPrice={basketTotal?.Total}
            currency="RUB"
            className="self-end mt-4"
          />

          <Table headers={TableHeaders} className="mt-4">
            {cartProducts?.map((product) => (
              <Row key={product.Id}>
                <ColumnIcon icon={product.Images[0].Image} />
                <Column>{product.Name}</Column>
                <Column className="text-start text-indent-gray">
                  {product.Description}
                </Column>
                <Column className="whitespace-nowrap">{`${numberFormat(
                  product.Price
                )} ${product.Currency}`}</Column>
                <ColumnQuantity
                  productId={product.Id}
                  value={product.Quantity.toString()}
                  handlerPlus={handlerPlus}
                  handlerMinus={handlerMinus}
                />
              </Row>
            ))}
          </Table>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ShoppingCartPage;
