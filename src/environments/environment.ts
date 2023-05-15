// @ts-ignore
import awsConfig from '../aws-exports';
import * as process from "process";

export const environment = {
  production: true,
  amplify: awsConfig,
// @ts-ignore
  openAiApiKey: process ? process.env.secrets.AMPLIFY_OPENAI_OPENAI_API_KEY : '',
// @ts-ignore
  openAiOrganizationId:  process ? process.env.secrets.AMPLIFY_ORGANIZATION_ID : '',
};
