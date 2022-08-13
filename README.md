
# </ Requirements

----

## Contents

 1. ### Functional requirements
 	- #### [Team capabilities](#team-capabilities-1)
 	- #### [Personal capabilities](#personal-capabilities-1)
 	- #### [Team leader capabilities](#team-leader-capabilities-1)
 2. ### [Entities](#-entities)
 3. ### [Relationships](#-relationships)
 4. ### [Models](#-models)
	- #### [Team](#team-1)
	- #### [User](#user-1)
	- #### [Event](#event-1)

----


# </ Functional requirements

## <u>Team capabilities</u>

   - __Group__ or __individual__ goals
   - team leader can choose if decision making is delegated
   - decisions can be taken democratically or single based
   - all the needed information from the executives should be available for them
   - the information available and reach can be controlled by team leader or delegated leader
   - public access can be default
   - Personal level or rating can be public to all team members

## <u>Personal capabilities</u>

   - User access to info required to work
   - Can be in contact with other certain users on the team or not
   - evidence or proof of work can be defined by team leader
   - objectives can be reordered and prioritized
   - time limit or expiration for task or goal can be established

## <u>Team Manager capabilities</u>

 - Delegate work and/or desition making to team leaders or users
 - Create Tasks for the whole team or individual
 - Add, edit or remove team members privileges or ranking and atttibutes, as well as information and communication reach and limit
 - Set the desition making just for himself by removing subordinates priviliges
 - See team and personal goals, achivements and general information(location?, actualState))
 - Create subgrops for specific tasks or assignments with 2 or more members.
 - Can be part of any group itself
 - Message 1 or more team members by the use of subgroups of members

## <u>Team leader capabilities</u>

 - Delegate work and/or desition making to the team
 - Add, edit or remove team members privileges or ranking and atttibutes, as well as information and communication reach and limit
 - Set the desition making just for himself by removing subordinates priviliges
 - See team and personal goals, achivements and general information(location?, actualState))
 - Create subgrops for specific tasks or assignments with 2 or more members.
 - Can be part of any group itself
 - Message 1 or more team members by the use of subgroups of members
 - Create Tasks for the whole team and team members

## <u>General capabilities</u>

 - Establish personal goals or tasks
 - Set reminders for time or events
 - View assigned goals or tasks
 - Communicate with team leader and others (if allowed)
 - Consult public calendar or schedule
 - Post on local group if permited
 - Request access to any public group

<br>

----
# </ Entities

  - __User__
	  + _Team Manager_
	  + _Team Leader_
	  + _Team User_
  - __Team__
	  + _Sub team_
  - __Task__
	   _Team task_
	  + _Personal task_
  - __Goal__ (_Goals are global tasks or rather objectives for the team as a whole_)
  - __Event__
  - __Post__
  - __Comment__
  - __Message__

# </ Relationships

<!--
    Team  1:1 Team Manager
    Team  1:n Team Leaders
    Team  1:n Team Members
    Team  1:n Goals
    Team  1:n Tasks
    Team  1:n Events
    Users n:1 Goal--
    Users n:n Events--
    User  1:n Comments--
    User  1:n Posts--
    User  1:n Tasks--
    Post  1:n Comments--
    Event 1:1 Team Leader
-->

<table align="center" border="0"  style="padding: 0.5% 4%; text-align: center;">
	<tbody >
		<th style="width: 150px; background-color: gray"></th>
		<th style="width: 80px; background-color: lightgreen"></th>
		<th style="width: 150px; background-color: gray"></th>
		<tr >
			<td >Team</td>
			<td >1:1</td>
			<td >Team Manager</td>
		</tr>
		<tr>
			<td>Team</td>
			<td>1:n</td>
			<td>Team Leaders</td>
		</tr>
		<tr>
			<td>Team</td>
			<td>1:n</td>
			<td>Team Members</td>
		</tr>
		<tr>
			<td>Team</td>
			<td>1:n</td>
			<td>Team Goals</td>
		</tr>
		<tr>
			<td>Team</td>
			<td>1:n</td>
			<td>Team Tasks</td>
		</tr>
		<tr>
			<td>Team</td>
			<td>1:n</td>
			<td>Team Events</td>
		</tr>
		<tr>
			<td>Users</td>
			<td>n:1</td>
			<td>Goal</td>
		</tr>
		<tr>
			<td>Users</td>
			<td>n:n</td>
			<td>Events</td>
		</tr>
		<tr>
			<td>User</td>
			<td>1:n</td>
			<td>Comments</td>
		</tr>
		<tr>
			<td>User</td>
			<td>1:n</td>
			<td>Posts</td>
		</tr>
		<tr>
			<td>User</td>
			<td>1:n</td>
			<td>Tasks</td>
		</tr>
		<tr>
			<td>Post</td>
			<td>1:n</td>
			<td>Comments</td>
		</tr>
		<tr>
			<td>Event</td>
			<td>1:1</td>
			<td>Team Leader</td>
		</tr>
		<tfoot>
		<th style="width: 150px; background-color: gray"></th>
		<th style="width: 80px; background-color: lightgreen"></th>
		<th style="width: 150px; background-color: gray"></th>
		</tfoot>
	</tbody>
</table>


# </ Models

----

> ## _Team_

<pre style="margin: 0 2rem; font-size: 1rem">
	team_id:Object_id(),
	team_mgr: <a href="#user-1">$user_id</a>,,
	team_name: _string_,
	team_leaders: [...<a href="#user-1">$user_id</a>,],
	team_members: [...<a href="#user-1">$user_id</a>,],
	created_at: _datetime_,
	updated_at: _datetime_,
	team_goals: [...<a href="#goal-1">$goal_id</a>,],
	team_channel_log: [...<a href="#post-1">$post_id</a>,],
	team_tasks: [...<a href="#task-1">$task_id</a>,],
	team_events: [... <a href="#event-1">$event_id</a>,],
	team_desc: _string_
</pre>

----

> ## _User_

<pre style="margin: 0 2rem; font-size: 1rem">
	user_id: Object_id()
	user_name: _string_
	user_last: _string_
	user_email: _string_
	user_phone: _string_
	user_team: <a href="#team-1">$team_id</a>,
	user_role: _enumerable_ [manager,leader,member],
	state: _bool_,
	user_tasks: [...<a href="#task">$task_id</a>,],
	user_goals: [...<a href="#goal">$goal_id</a>,],
	immediate_boss: <a href="#user-1">$user_id</a>,
	has_events: [...<a href="#event-1">$event_id</a>,],
	user_comments: [...<a href="#comment-1">$comment_id</a>,]
	user_posts: [...<a href="#posts-1">$post_id</a>,]
</pre>

----

> ## _Event_

<pre style="margin: 0 2rem; font-size: 1rem">
    event_id: Object_id(),
    event_name: <string>,
    owner: <a href="#user-1">$user_id</a>,
    team: <a href="#team-1">$team_id</a>,
    created_at: _datetime_,
    updated_at: _datetime_,
    start_date: _date_,
    start_time: _time_,
    end_date: _date_,
    end_time: _time_,
    members: [...<a href="#user-1">$user_id</a>,]
</pre>

----

> ## _Comment_

<pre style="margin: 0 2rem; font-size: 1rem">
	comment_id: Object_id(),
	user_id: <a href="#user-1">$user_id</a>,
	content: _string_,
	reactions: [Int(likes), Int(dislikes)],
	created_at: _datetime_,
	updated_at: _datetime_,
	post_id: <a href="#posts-1">$post_id</a>
</pre>

----

> ## _Task_

<pre style="margin: 0 2rem; font-size: 1rem">
	task_id: Object_id(),
	user_id: <a href="#user-1">$user_id</a>,
	created_at: _datetime_,
	updated_at: _datetime_,
	due_date: _datetime_,
	team_id: <a href="#team-1">$team_id</a>,
	done: _bool_
</pre>

----

> ## _Goal_

<pre style="margin: 0 2rem; font-size: 1rem">
	goal_id: Object_id(),
	team: <a href="#team-1">$team_id</a>,
	owner: <a href="#user-1">$user_id</a>,
	created_at: _datetime_,
	updated_at: _datetime_,
	due_date: _datetime_,
	completion: _float_,
	done: _bool_
</pre>

----

> ## _Message_

<pre style="margin: 0 2rem; font-size: 1rem">
	msg_id: Object_id(),
	from: <a href="#user-1">$user_id</a>,
	to: <a href="#user-1">$user_id</a>,
	send_at: _datetime_,
	viewed_at: _datetime_,
	attachments: [_file_,_contact_($user_id)],
	deleted_at: _datetime_,
	team_id: <a href="#team-1">$team_id</a>
</pre>

----

> ## _Post_

<pre style="margin: 0 2rem; font-size: 1rem">
	post_id: Object_id(),
	user_id: <a href="#user-1">$user_id</a>,
	content: _string_,
	post_comments: [...<a href="#comment">$comment_id</a>],
	create_at: _datetime_,
	updated_at:_datetime_,
	team_id: <a href="#team-1">$team_id</a>,
	expiration: _datetime_ || null
</pre>

----

