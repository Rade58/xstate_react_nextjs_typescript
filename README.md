# INTRO

REPO PROJECTA, KOJ ISE RADI TOKOM WORKSHOP-A:

<https://github.com/davidkpiano/frontend-masters-react-workshop>

AUTOR XSTATE-A IDE KA TOME DA XSTATE BUDE FULLY COMPATIBLILE SA OVIM:

<https://www.w3.org/TR/scxml/>

A GIANT SPEC THAT XSTATE FOLLOWS

# REACT APP, KOJA JE ACTUAL APP WORKSHOP-A (ODNONO OVO JE PODELJENO U MNOSTVO RAZLICITIH SEKCIJA), SAM KLONIRAO U `/workshop_project` FOLDER

- `git clone git@github.com:davidkpiano/frontend-masters-react-workshop.git`

- `mv frontend-masters-react-workshop workshop_project` 

- `rm -rf workshop_project/.git`

- `cd workshop_project`

- `yarn`

- `yarn start`

<http://localhost:3069>

BICE TI SERVED PAGE SA EXERCISE-OVIMA

- `cd ..`

# ONO STO CE NA KRAJU BITI SAGRADJENO JESTE TIMER APP

MEDJUTIM TI MOZES VIDETI SVA RESENJA I SVE KORAKE

# DODAVNJE ABSOLUTE IMPORTS-A

OVO RADIM JER ZELIM DA KORISTIM KOMPONENTE IZ `workshop_project/src`, A ZELIM LEPSE IMPORTE

- `code tsconfig.json`

```json
// DODAO OVO UNDER `"compilerOptions"`
"baseUrl": ".",
"paths": {
  "@/work/*": ["workshop_project/src/*"]
},
```

- `yarn add --dev eslint-import-resolver-alias`

- `code .eslintrc`

```json
// DODAO OVO
"ignorePatterns": ["node_modules/", ".next/"],
"settings": {
  "react": {
    "version": "detect"
  },
  // DODAO OVO
  "import/resolver": {
    "alias": {
      "map": [["@/work", "./workshop_project/src"]],
      "extensions": [".ts", ".js", ".jsx", ".tsx", ".json"]
    }
  }
}
```
