import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schemaTypes } from './sanity/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  title: 'Portfolio CMS',
  schema: {
    types: schemaTypes,
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            S.listItem()
              .title('Case Studies')
              .child(S.documentTypeList('caseStudy').title('Case Studies')),
            S.listItem()
              .title('Insights')
              .child(S.documentTypeList('insight').title('Insights')),
            S.listItem()
              .title('Tools')
              .child(S.documentTypeList('tool').title('Tools')),
            S.listItem()
              .title('Journey')
              .child(S.documentTypeList('journey').title('Journey')),
          ]),
    }),
    
  ],
})
