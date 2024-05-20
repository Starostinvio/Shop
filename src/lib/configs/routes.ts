const getUrl = {
  shoppingCart: () => {
    const defaultUrl = "/api";
    const shoppingRootUrl = "/ShoppingCart";

    return {
      create: (value = 10) => `${defaultUrl}/Admin/create?value=${value}`,
      header: `${defaultUrl}${shoppingRootUrl}/header`,
      products: `${defaultUrl}${shoppingRootUrl}/products`,
      quantityIncProduct: `${defaultUrl}${shoppingRootUrl}/quantityinc`,
      quantityDecProduct: `${defaultUrl}${shoppingRootUrl}/quantitydec`,
      removeProduct: `${defaultUrl}${shoppingRootUrl}/product`,
      basketSummary: `${defaultUrl}${shoppingRootUrl}/baskedsummary`,
    };
  },
};

const AppRoutes = {
  root: "/",
  ...getUrl.shoppingCart(),
};

export default AppRoutes;
