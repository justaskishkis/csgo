# homework


## BUGs found
1.
  export enum MessageChannel {
    De = 'DE',
    En = 'EN',
    HighRoller = 'HIGH_ROLLER',
    Pt = 'PT',
    Sv = 'SV',
    En = 'en'
  }
  
  this generated model from gql endpoint has a duplicate selector,
  i removed it manually
2.
  generated file from a library had a missing "override" property for the "document" variable, i also added it manually
  export class ListQueryGQL extends Apollo.Query<ListQueryQuery, ListQueryQueryVariables> {
  override document = ListQueryDocument;


