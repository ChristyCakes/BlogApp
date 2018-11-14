delimiter //

CREATE PROCEDURE spByAuthor
(authorid int)
begin
select
	x.blogid as 'blogid',
	a.name as 'author',
	b.title as 'blogtitle',
	b.content as 'content'
from authorblog x
	join authors a on a.id = x.authorid
	join blogs b on b.id = x.blogid
where authorid = x.authorid;
end//

delimiter ;