delimiter //

CREATE PROCEDURE spAuthorBlog
(authorname varchar(20), id int)

begin

insert into authorblog(authorid, blogid)
select
	a.id,
    id
from authors a

where a.name = authorname;
end//
delimiter ;