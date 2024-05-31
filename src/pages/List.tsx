import React, { useEffect } from "react";
import PlanetService from "../services/planets";
import useRequest from "../hooks/useRequest";

const List: React.FC = () => {
  const { call, next, prev, response, loading } = useRequest(PlanetService.getAll);

  useEffect(() => {
    call();
  }, []);

  return (
    <div>
      <div>
        {response?.results.map((planet) => (
          <p key={planet.url}>{planet.name}</p>
        ))}
      </div>

      {loading && (
        <span>loading...</span>
      )}

      <div>
        <button onClick={prev}>prev</button>
        <button onClick={next}>next</button>
      </div>
    </div>
  )
}

export default List;
