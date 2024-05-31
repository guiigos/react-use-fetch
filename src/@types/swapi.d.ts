declare namespace Swapi {
  interface Response<T> {
    count: number;
    next?: string;
    previous?: string;
    paramsNext?: URLSearchParams;
    paramsPrevious?: URLSearchParams;
    results: T[];
  }

  interface Planets {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    url: string;
  }
}
