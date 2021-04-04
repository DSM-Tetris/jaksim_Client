import React from 'react';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_CONTENTS = gql`
  query{
    continents{
      code
      name
    }
  }
`

const GraphQL = () => {
  return (
    <Query query={GET_CONTENTS}>
      {({loading,error,data})=>{
        if(loading) return <p>loading...</p>
        if(error) return <p>error...</p>
        return (
          <ul>
            {data.continents.map(({code,name})=>(
              <li key={code}>{name}</li>
            ))}
          </ul>
        )
      }}
    </Query>
  );
};

export default GraphQL;