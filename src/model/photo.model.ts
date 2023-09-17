export interface IPhoto {
  id?: number;
  userId?: number;
  title?: string;
  url?: string;
  thumbnailUrl?: string | any;
}

export class Photo implements IPhoto {
  constructor(public id?: number, public userId?: number, public title?: string, public url?: string, public thumbnailUrl?: string) { }
}

export interface IResponsePhoto {
  data: IPhoto[];
}
