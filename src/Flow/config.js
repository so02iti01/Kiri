const initialElements = [{"id":"1","type":"input","data":{"label":"Welcome to Kiri!"},"position":{"x":1,"y":-1}},{"id":"node_88u8i8","type":"default","data":{"label":"You can drag nodes (like this one) around"},"position":{"x":-105,"y":103.99999999999999},"className":"blue"},{"id":"node_xjwqq","source":"1","target":"node_88u8i8","animated":true},{"id":"node_qjj6kj","type":"default","data":{"label":"Click this node, then press Tab"},"position":{"x":-105,"y":201.99999999999997},"className":""},{"id":"node_mxl14l","source":"node_88u8i8","target":"node_qjj6kj","animated":true},{"id":"node_sedzgx","type":"output","data":{"label":"Any data you put here stays in your browser."},"position":{"x":104,"y":102}},{"source":"1","sourceHandle":null,"target":"node_sedzgx","targetHandle":null,"id":"reactflow__edge-1null-node_sedzgxnull"}];

const initialSettings = {
	background: true,
	backgroundType: 'dots',
	snapToGrid: false,
	miniMap: false,
};

export {
	initialElements,
	initialSettings
}