import {RawPaginatedObject} from './raw/RawPaginatedObject';
import {VideoMin} from './VideoMin';

/**
 * Used to represent a paginated object.
 * @extends RawPaginatedObject
 * @property total - Total number of objects in the paginated object.
 * @property items - The objects in the paginated object.
 */
export class PaginatedObject {
  #rawData: RawPaginatedObject;

  constructor(raw: RawPaginatedObject) {
    this.#rawData = raw;
  }

  /**
   *  Get the objects in the paginated object.
   * @returns {any[]}
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public get items(): VideoMin[] {
    return this.#rawData.items;
  }

  /**
   * Get the total number of objects in the paginated object.
   * @returns {number}
   */
  public get total(): number {
    return this.#rawData.total;
  }
}
