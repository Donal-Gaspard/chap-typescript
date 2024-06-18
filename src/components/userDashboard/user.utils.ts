
export const getInitial = ( lastName: string, firstName?: string) =>{
  return `${firstName?.charAt(0)}${lastName.charAt(0)}`
}

export const fullName = (firstname?: string , lastname?: string | null ) => {
  let firstnameCapitalize;
  let lastnameCapitalize;
  if (firstname) {
    firstnameCapitalize =  firstname.charAt(0).toUpperCase() + firstname.slice(1);
  }
  if (lastname) {
    lastnameCapitalize =  lastname.charAt(0).toUpperCase() + lastname.slice(1);
  }

  return `${firstnameCapitalize} ${lastnameCapitalize}`;
}
