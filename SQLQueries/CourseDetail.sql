SELECT  TOP (2000)  
	   cv.id as cvid
	  ,cv.courseid as cvcourseid
	  ,co.id as coid
	  ,se.courseid as secourseid
      ,cv.coursecode
      ,cv.coursetitle
      ,cv.description
      ,cv.audience
      ,cv.coursegoals
      ,cv.localizationid
      ,cv.launchurl
      ,cv.duration
      ,cv.archived
	  ,co.coursemedium as cocoursemedium
	  ,co.launchtype as colaunchtype
	  ,co.private as coprivate
	  ,cm.medium as cmmedium
	  ,cm.description as cmdescription
	  ,cm.archived as cmarchived
	  ,lt.type as lttype
	  ,cove.name as covename
	  ,views1
  FROM  
	[courses] as co 
  INNER JOIN  
	[courseversions] as cv
		ON co.id=cv.courseid
  INNER JOIN 
	(SELECT s.courseid, COUNT(1) as views1 FROM [sessions] as s INNER JOIN [attempts] as att ON s.id=att.sessionid GROUP BY courseid) as se
		ON cv.courseid=se.courseid
  INNER JOIN 
	[coursemediums] as cm
		ON co.coursemedium=cm.id
  INNER JOIN 
	[launchtypes] as lt
		ON co.launchtype=lt.id
  INNER JOIN 
	[coursevendors] as cove
		ON co.coursevendorid=cove.id
  where 
		localizationid='1' 
	AND co.id='1'


