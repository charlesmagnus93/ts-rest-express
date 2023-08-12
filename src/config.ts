import { initServer } from '@ts-rest/express';
import { initContract } from '@ts-rest/core';

const Server = initServer();
const Contract = initContract();

export { Contract, Server }
