import { HttpsOptions } from 'firebase-functions/v2/https'
import taxifyOptions from '../../../taxifyOptions.json'

const appName = taxifyOptions.name
const project = taxifyOptions.projectId
const region = taxifyOptions.region
const serviceAccount = `${appName}@${project}.iam.gserviceaccount.com`
const vpcConnector = `${appName}-con`
const cors = true

export const publicHttpOption: HttpsOptions = {
  region,
  cpu: 1,
  memory: '1GiB',
  maxInstances: 100,
  minInstances: 0,
  concurrency: 1,
  timeoutSeconds: 540,
  labels: {
    taxify: 'http',
  },
}

export const privateHttpOption: HttpsOptions = {
  region,
  cpu: 1,
  memory: '1GiB',
  maxInstances: 100,
  minInstances: 0,
  concurrency: 80,
  serviceAccount,
  ingressSettings: 'ALLOW_INTERNAL_AND_GCLB',
  vpcConnector,
  vpcConnectorEgressSettings: 'PRIVATE_RANGES_ONLY',
  cors,
  timeoutSeconds: 540,
  labels: {
    taxify: 'http',
  },
}
