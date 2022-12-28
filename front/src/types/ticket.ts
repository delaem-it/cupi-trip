export interface Airport {
  code: string;
  name: string;
  country?: string;
  city?: string;
  cityCode?: string;
}
export interface Company {
  name: string;
  logo: string;
}
export interface Price {
  value: number;
  currency: string;
  symbol: string;
}

export interface RoutePoint {
  airport: Airport;
  date: number;
}

export interface Transfer {
  airport: Airport;
  duration: number;
}

export interface Tag {
  text: string;
  color: 'success' | 'info' | 'warn' | 'error';
}

export interface Route {
  from: RoutePoint;
  to: RoutePoint;
  tag?: Tag;
  transfers?: Transfer[];
}

export interface ITicket {
  id: number | string;
  price: Price;
  to: {
    company: Company;
    routes: Route[];
  };
  from?: {
    company: Company;
    routes: Route[];
  };
}
