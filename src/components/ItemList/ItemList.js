import React, { useState, useRef, useEffect } from 'react';
import {
	RecyclerListView,
	DataProvider,
	LayoutProvider,
} from 'recyclerlistview/web';

function createNewDataProvider() {
	return new DataProvider((r1, r2) => {
		return r1 !== r2;
	});
}

const ItemList = ({ data, renderRow, ...props }) => {
	const [ dataProvider, setDataProvider ] = useState(
		createNewDataProvider().cloneWithRows(data),
	);
	const layoutProviderRef = useRef();

	useEffect(
		() => {
			setDataProvider(createNewDataProvider().cloneWithRows(data));
		},
		[ data ],
	);

	return (
		<RecyclerListView
			layoutProvider={layoutProviderRef.current}
			dataProvider={dataProvider}
			rowRenderer={renderRow}
			canChangeSize
			useWindowScroll
		/>
	);
};


export default ItemList