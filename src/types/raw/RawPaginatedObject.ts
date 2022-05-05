/**
 * Used to represent a paginated object.
 */
export interface RawPaginatedObject {
  /**
   * Total number of objects in the paginated object.
   */
  total: number;

  /**
   * The objects in the paginated object.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
}
