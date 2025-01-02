import { RuntimeOptions } from 'firebase-functions/v1'
import taxfyOptions from '../../../taxfyOptions.json'

const appName = taxfyOptions.name
const project = taxfyOptions.projectId

const serviceAccount = `${appName}@${project}.iam.gserviceaccount.com`
const vpcConnector = `${appName}-con`

export const authPublicOption: RuntimeOptions = {
  memory: '1GB',
  maxInstances: 100,
  minInstances: 0,
  timeoutSeconds: 300,
  labels: {
    taxfy: 'auth',
  },
}

export const authPrivateOption: RuntimeOptions = {
  memory: '1GB',
  maxInstances: 100,
  minInstances: 0,
  timeoutSeconds: 300,
  serviceAccount,
  ingressSettings: 'ALLOW_INTERNAL_ONLY',
  vpcConnector,
  vpcConnectorEgressSettings: 'PRIVATE_RANGES_ONLY',
  labels: {
    taxfy: 'auth',
  },
}
