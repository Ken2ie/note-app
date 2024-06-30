import { HttpContextToken, HttpHeaders } from "@angular/common/http";

export const API_BASE_URL : string = "http://localhost:4000";

export const NO_AUTH = new HttpContextToken<boolean>(() => false);

