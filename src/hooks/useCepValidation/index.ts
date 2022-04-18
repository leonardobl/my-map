import React from 'react'

export const useCepValidation = (value: string) => {
  
  let cepMascared = value.replace(/\D/g, ""); //Remove tudo o que não é dígito
  cepMascared = cepMascared.replace(/^(\d{5})(\d{3})$/g, "$1-$2");
   return cepMascared
}


