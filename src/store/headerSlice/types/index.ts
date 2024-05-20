interface Header {
  LogoImg: "string";
  UsedGuid: "string";
  UserName: "string";
}

export interface HeaderState {
  header: Header | null;
  headerRequest: () => Promise<void>;
}
