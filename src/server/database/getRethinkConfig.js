import { readCert } from './readCert'

export const getRethinkConfig = () => {
  const config = {
    host: process.env.DATABASE_HOST || 'localhost',
    port: process.env.DATABASE_PORT || 28015,
    authKey: process.env.DATABASE_AUTH_KEY || '',
    db: process.env.NODE_ENV === 'testing' ? 'ava' : 'egt_x_2',
    min: process.env.NODE_ENV === 'production' ? 50 : 3,
    buffer: process.env.NODE_ENV === 'production' ? 50 : 3,
  }

  if (process.env.NODE_ENV && process.env.DATABASE_SSL) {

    // we may need a cert for production deployment
    // Compose.io requires this, for example.
    // https://www.compose.io/articles/rethinkdb-and-ssl-think-secure/

    Object.assign(config, {
      ssl: {
        ca: readCert(process.env.DATABASE_SSL),
      },
    })
  }
  return config
}
