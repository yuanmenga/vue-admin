interface ResponseRedult<T> {
  code: number;
  message: string;
  type: "success" | "error";
  data: T;
}
