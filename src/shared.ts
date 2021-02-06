import { EntityTarget } from 'typeorm/common/EntityTarget';
import { Connection } from 'typeorm';

export const getRepositoryProvider = <M>(
  provide: string,
  model: EntityTarget<M>,
  dbConnectionString: string,
) => ({
  provide,
  useFactory: (connection: Connection) => connection.getRepository(model),
  inject: [dbConnectionString],
});
