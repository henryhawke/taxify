import { DocumentOptions } from 'firebase-functions/v2/firestore'
import taxifyOptions from '../../../taxifyOptions.json'

const appName = taxifyOptions.name
const project = taxifyOptions.projectId
const region = taxifyOptions.region
const serviceAccount = `${appName}@${project}.iam.gserviceaccount.com`
const vpcConnector = `${appName}-con`

export const firestoreDefaultOption = (document: string): DocumentOptions => ({
  document,
  region,
  cpu: 1,
  memory: '1GiB',
  maxInstances: 100,
  minInstances: 0,
  concurrency: 1,
  timeoutSeconds: 540,
  labels: {
    taxify: 'firestore',
  },
})

export const firestorePrivateOption = (document: string): DocumentOptions => ({
  document,
  region,
  cpu: 1,
  memory: '1GiB',
  maxInstances: 100,
  minInstances: 0,
  concurrency: 1,
  serviceAccount,
  ingressSettings: 'ALLOW_INTERNAL_ONLY',
  vpcConnector,
  vpcConnectorEgressSettings: 'PRIVATE_RANGES_ONLY',
  timeoutSeconds: 540,
  labels: {
    taxify: 'firestore',
  },
})