
export const getInitial = ( lastName: string, firstName?: string) =>{
  return `${firstName?.charAt(0)}${lastName.charAt(0)}`
}
