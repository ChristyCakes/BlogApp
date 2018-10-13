delimiter //
create PROCEDURE spGetTags
(blogid int)
begin
select
t.name
from blogtags b
join tags t on b.tagid = t.id
where b.blogid = blogid;
end//
delimiter ;