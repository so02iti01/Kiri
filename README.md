# Kiri

> Effortless mind-maps and diagrams for those who care about privacy.

![Kiri](https://codeberg.org/athena/Kiri/raw/branch/main/public/kiri-promo.png)

## Features

- Easy-to-use interface for both mind-maps and diagrams of many types
- Every thing is done locally and saved in `localStorage` (AKA there's no back-end)
- Three line types for connecting nodes: curved, straight, and step
- Add labels to connector lines
- Pre-defined system of Input, Default, and Output nodes

## Usage

### Editing nodes

By default, there is one input node labeled "Central Topic." **With the node selected,** you can edit the label in multiple ways:

- By double-clicking the node;
- By clicking the pencil in the left-middle of the screen;
- By editing the input in the top-right;
- By pressing the spacebar

### Adding nodes

You can add new nodes in multiple ways:

- With a node selected:
	- Press `Tab` to create a new connected child (or the Diagram icon in the left-middle of the screen)
	- Press `Enter` to create a new, disconnected sibling node (or the Node Plus icon in the left-middle of the screen)
- Without a node selected:
	- By using the three "Input, Default, Output" buttons in the right-middle of the screen.

### Connecting nodes

You can drag connection lines between nodes by clicking and dragging from the small circles on the nodes. This will create a new connection line (called _edges_).

If you click on the connection line, you can modify the line style and the label. If you move your mouse over the connection line right by a node, you can then drag that connection line to another node.

### Node types

There are three kinds of nodes: Input, Default, and Output.

Input nodes can only have children connected.

Default nodes can both have children and be children themselves.

Output nodes can only be children.

## Credits

Huge thanks to [WebKid](https://github.com/wbkd) for their awesome library [React Flow](https://github.com/wbkd/react-flow/) ([license](https://github.com/wbkd/react-flow/blob/main/LICENSE))
