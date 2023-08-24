import { client } from '@utils/common';

import { List } from '@typings';

export const getList = ({ listId }: { listId: string }) => {
	return client<List>(`/list/${listId}`).then(res => res.data);
};
