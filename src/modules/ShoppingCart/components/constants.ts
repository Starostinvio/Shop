export interface TableHeader {
  value: string | null;
  id: number;
}

export const TableHeaders: TableHeader[] = [
  { value: null, id: 1 },
  { value: "Имя", id: 2 },
  { value: "Описание", id: 3 },
  { value: "Цена", id: 4 },
  { value: "Шт", id: 5 },
];
