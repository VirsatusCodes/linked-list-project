import {LinkedList, NodeCreator} from '../linked-list-project/linkedList';

const list = LinkedList();

test('linked properly', () => {
    expect(LinkedList);
});

test('linked properly', () => {
    expect(NodeCreator);
});

test('creates a Node with given value', () => {
    const Node = NodeCreator('five');
    expect(Node.getValue()).toBe('five');
});

test('can create and access a list through Head()', () => {
    list.appendValue('one');
    expect(list.getHead().getValue()).toBe('one');
});

test('can travel through a list and append values', () => {
    list.appendValue(2);
    list.appendValue(3);
    expect(list.getHead().getNext().getNext().getValue()).toBe(3);
});
/* when i appended 'one' in prevous test they are all in a global list
variable, i could make individual lists for each test but just keeping
track works just as well i think for my purposes.  */