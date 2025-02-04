export class PlanetUrl {
  public static readonly URL_BASE = "https://backendplanetas.onrender.com/";
  public static readonly PLANET = "planet/";
  public static readonly SAVE = "save";
  public static readonly DELETE = "delete";
  public static readonly GET = "get-by-filters";
  public static readonly UPDATE_FAVORITE = "update-favorite";

  public static readonly URL_SAVE_PLANET = this.URL_BASE + this.PLANET + this.SAVE;
  public static readonly URL_DELETE_PLANET = this.URL_BASE + this.PLANET + this.DELETE;
  public static readonly URL_GET_PLANET = this.URL_BASE + this.PLANET + this.GET;
  public static readonly URL_UPDATE_FAVORITE_PLANET = this.URL_BASE + this.PLANET + this.UPDATE_FAVORITE;
}
