import { useCallback, useEffect, useState } from 'react';
import { GraphQLArgs } from 'graphql';
import server from '../mockServer/setupServer';

type Options = {
  variables?: GraphQLArgs['variableValues'];
  skip?: boolean
}

const useQuery = <T>(query: GraphQLArgs['source'], options?: Options) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState<T>()

  const { variables , skip = false } = options || {};

  const executeQuery = useCallback(async () => {
    try {
      setLoading(true);

      const { data, errors } = await server.query(query, variables);

      if (errors) throw new Error(errors.toString());
      
      setData(data as unknown as T);
    } catch(e) {
      setError(true);
      console.error(e)
    } finally {
      setLoading(false);
    }
  }, [query, variables]);

  const resetState = () => {
    setLoading(false);
    setError(false);
    setData(undefined);
  }

  useEffect(() => {
    if (skip) return;
    
    resetState();
    executeQuery();
  },[skip])


  return {
    loading,
    data,
    error
  }
};

export default useQuery;