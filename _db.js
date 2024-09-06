const books = [
    {
        id: 'book-1',
        title: 'Harry Potter and The Chamber of Secrets',
        author: 'J.K. Rowling',
        published_at: '1998-07-02',
        category: 'Fantasy',
        total: 10,
    },
    {
        id: 'book-2',
        title: 'One Piece',
        author: 'Mike Shinoda',
        published_at: '1998-01-03',
        category: 'Fantasy',
        total: 11,
    }

]

const members = [
    {
        id: 'member-1',
        name: 'Mardin Wijaya',
        email: 'me@mardin.my.id',
        verified: true,
    },
    {
        id: 'member-2',
        name: 'Verawaty',
        email: 'verawatys@gmail.com',
        verified: false,
    }
]

const lendings = [
    {
        id: 'lend-1',
        book_id: 'book-1',
        member_id: 'member-1',
        borrowed_at: '2024-06-28',
        returned_at: '2024-07-28',
    },
    {
        id: 'lend-2',
        book_id: 'book-2',
        member_id: 'member-2',
        borrowed_at: '2024-06-28',
        returned_at: '2024-07-28',
    }
]
export { books, members, lendings };