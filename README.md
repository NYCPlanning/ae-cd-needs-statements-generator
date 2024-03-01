## Introduction
This is an app designed to create the annual Community District Needs statements.  They were previously generated using the [CD Needs platform](https://github.com/NYCPlanning/ose-CD-Needs), a PHP/Symfony application.  The functionality of that platform has been broken up into [ae-cdneeds-alchemer](https://github.com/NYCPlanning/ae-cdneeds-alchemer) for collecting the form submissions, and this tool for creating the statements.

In the template files, where appropriate, there are comments indicating which file(s) in the old repo the new files are based upon, and there may be commented-out snippets of that code at the bottom of some template files.

## Getting Started

Install the node modules
```bash
npm install
```

First, run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Exporting the data
You will need to export the data for both the Needs Statements and the Budget Request forms.  To do so, in Alchemer select the corresponding survey, and go to Results -> Exports -> CSV / Excel -> Download All Data Now!

## Editing the CSVs

- Use `variablenamelookups.xlsx` to replace the variable names in the csvs
  - Any blanks should be removed
- Add in `boro`, `boardNumber`, and `agencyAcronym` columns
- In the budget requests, remove items where:
  - `Status` is not `Complete`
  - `isDeleted` is `TRUE`

When done, [convert them to json](https://csvjson.com/csv2json) and put them in `/public/jsondata`