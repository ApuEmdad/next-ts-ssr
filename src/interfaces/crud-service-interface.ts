export interface ICrudService {
  get<T>(): Promise<T>;
  find<T>(id: number): Promise<T>;
  create<T>(body: any): Promise<T>;
  remove<T>(id: number): Promise<T>;
};