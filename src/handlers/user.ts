import { client } from '@utils/common';

import { List } from '@typings';

export const getUserList = () => {
	return client<List[]>('/user/lists').then(res => res.data);
};
