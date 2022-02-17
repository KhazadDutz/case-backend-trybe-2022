const filters = [
  {
    "company_type": [
      'name to select'
    ]
  },
  {
    "is_cnpj_category": [
      'name to select'
    ]
  },
  {
    "specialty_category": [
      'name to select'
    ]
  },
  {
    "subdimension": [
      'name to select'
    ]
  },
  {
    "persona": [
      'name to select',
      'name2 to select'
    ]
  },
  {
    "business_unit": [
      'name to select'
    ]
  },
  {
    "person_status_category": [
      'name to select',
      'name2 to select'
    ]
  },
  {
    "person_role": [
      'name to select',
      'name2 to select'
    ]
  },
]



const funcaoDeIterar = (list) => {
  list.forEach((obj, index) => {
    const innerList = Object.values(obj)[0][0]
    const filterName = Object.keys(obj)[0]
    console.log(filterName, '*******', index, '*******', innerList, '*******', [])
    namesFromInnerArray = []
  })
}

funcaoDeIterar(filters)
