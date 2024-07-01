export interface LoginDetails {
    email : string;
    password : string;
}

export type VerifyEmail = {
    email : string;
    code : string;
}

export interface Register  extends LoginDetails {
    username: string;
}
export type forgotPasswordRequest ={
  email : string
}

export type ForgotPassword ={
  email : string
  code : string
  newPassword : string
}

export type hotelOffers ={
        geoId: string
        checkIn: string
        checkOut: string
        pageNumber: number
        currencyCode: "USD"    
}

export interface addCard {
    userId : string
    cardNumber :  string 
    cardHolderName : string
    expirationDate : string
    cvv : string
}

export type initPayment ={
        email : string
        amount : string
        metaData : []
}

export type query ={
  query : string
}

export type keyword ={
  keyword : string
}


export type loadingStatus = {
   onloading : boolean;
   complete : boolean;
}

export type callbackRequest = {
    code: string | null;
    registrationId : string | null;
}

export type Success = {
    message: string;
  };
  export type Failure = {
    errorMessage: string;
  };

  export type VerifiedUser = {
    token: string;
    firstName: string;
    lastName: string;
    email: string;
    role: string;
  };

 export  interface DepartureDateTimeRange {
    date: string;
    time: string;
}

export interface OriginDestination {
    id: string;
    originLocationCode: string;
    destinationLocationCode: string;
    departureDateTimeRange: DepartureDateTimeRange;
}

export interface Traveler {
    id: string;
    travelerType: string;
    fareOptions: string[];
}

export interface CabinRestriction {
    cabin: string;
    coverage: string;
    originDestinationIds: string[];
}

export interface CarrierRestrictions {
    excludedCarrierCodes: string[];
}

export interface FlightFilters {
    cabinRestrictions: CabinRestriction[];
    carrierRestrictions: CarrierRestrictions;
}

export interface SearchCriteria {
    maxFlightOffers: number;
    flightFilters: FlightFilters;
}

export interface TravelDateTime {
    start: string;
    end: string;
}

export interface FlightSearchRequest {
    currencyCode: string;
    originDestinations: OriginDestination[];
    travelers: Traveler[];
    sources: string[];
    searchCriteria: SearchCriteria;
}

export interface AuthenticatedUser {
    id: string;
    firstName: string;
    email: string;
    lastName: string | null;
    roles: string;
  }

  export interface Note {
  id: number;
  title: string;
  noteBody: string;
}