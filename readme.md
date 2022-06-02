<!-- Filter by book title -->

**`query`**: {title: "book_title"}

<!-- Filter by author -->

**`query`**: {author: "author_name"}

<!-- Filter by isbn -->

**`query`**: {isbn: "isbn_string"}

<!-- Filter by year -->

**`query`**: {year: year_number}

<!-- Filter by genre -->

**`query`**: {genre: "book_genre"}

<!-- Filter by standalone or series -->

**`query`**: {standalone: true/false}

<!-- Example of multiple filters -->
<!-- author and standalone -->

**`query`**: {$and: [{author: "author_name"}, {standalone: true}]}

<!-- Project w/o id -->

**`projection`**:

<!-- Project author and title only -->

**`projection`**:

<!-- Project isbn -->

**`projection`**:

<!-- Project rating -->

**`projection`**:

<!-- Example multiple projections -->
<!-- title, author, quote -->

**`projection`**:

<!-- Sort by year -->

**`sort`**:

<!-- Sort by rating -->

**`sort`**:

<!-- Limit results -->

**`limit`**:
