import { CallableOptions } from 'firebase-functions/v2/https'
import taxifyOptions from '../../../taxifyOptions.json'

const appName = taxifyOptions.name
const project = taxifyOptions.projectId
const region = taxifyOptions.region
const serviceAccount = `${appName}@${project}.iam.gserviceaccount.com`
const vpcConnector = `${appName}-con`

export const onCallOption: CallableOptions = {
  region,
  cpu: 1,
  memory: '1GiB',
  maxInstances: 100,
  minInstances: 0,
  concurrency: 1,
  timeoutSeconds: 540,
  cors: [/taxify\.dev$/, 'epics.dev'],
  labels: {
    taxify: 'onCall',
  },
}

export const onCallPrivateOption: CallableOptions = {
  region,
  cpu: 1,
  memory: '2GiB',
  maxInstances: 100,
  minInstances: 0,
  concurrency: 80,
  serviceAccount,
  ingressSettings: 'ALLOW_INTERNAL_AND_GCLB',
  vpcConnector,
  vpcConnectorEgressSettings: 'PRIVATE_RANGES_ONLY',
  cors: [/taxify\.dev$/, 'epics.dev'],
  timeoutSeconds: 540,
  labels: {
    taxify: 'onCall',
  },
}
