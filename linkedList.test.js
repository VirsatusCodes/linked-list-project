import {LinkedList, NodeCreator} from '../linked-list-project/linkedList';

const appendList = LinkedList();
const prependList = LinkedList();
const emptyList = LinkedList();

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

test('can create and access a appendList through Head()', () => {
    appendList.appendValue('one');
    expect(appendList.getHead().getValue()).toBe('one');
});

test('can travel through a appendList and append values', () => {
    appendList.appendValue(2);
    appendList.appendValue(3);
    expect(appendList.getHead().getNext().getNext().getValue()).toBe(3);
});

test('adds a node to an empty list', () => {
    prependList.prependValue('two');
    expect(prependList.getHead().getValue()).toBe('two');
});

test('adds a node to an existting list and links to others', () => {
    prependList.prependValue('one');
    prependList.appendValue('three');
    expect(prependList.getHead().getValue()).toBe('one');
    expect(prependList.getHead().getNext().getValue()).toBe('two');
    expect(prependList.getHead().getNext().getNext().getValue()).toBe('three');
});

test('counts the number of nodes in a linked list', () => {
    expect(appendList.getListSize()).toBe(3);
    appendList.appendValue('four');
    expect(appendList.getListSize()).toBe(4);
});

test('returns the value in the last node of the list', () => {
    expect(appendList.getTail().getValue()).toBe('four');
});

test('returns the node value at the given index', () => {
    expect(appendList.atPosition(2).getValue()).toBe(2);
});
/* this uses the head of the list being index 1 */

test('removes the last element from the list', () => {
    expect(appendList.getTail().getValue()).toBe('four');
    appendList.pop();
    expect(appendList.getTail().getValue()).toBe(3);
});
/* this removes from the list but does not delete the node */








test('all functions handle an empty list', () => {
    expect(emptyList.getListSize()).toBe(0);
    expect(emptyList.getHead()).toBe('List is empty');
    expect(emptyList.getTail()).toBe('List is empty');
    expect(emptyList.atPosition(2)).toBe('List is empty');
    expect(emptyList.pop()).toBe('List is empty');
});




/* when i appended 'one' in prevous test they are all in a global appendList
variable, i could make individual lists for each test but just keeping
track works just as well i think for my purposes.  */