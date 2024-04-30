export interface IGetAllMoviesUseCase {
  execute({page, limit}: any): Promise<any | null>
}