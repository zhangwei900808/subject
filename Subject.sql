USE [master]
GO

IF EXISTS(SELECT 1 FROM sysdatabases WHERE NAME=N'Subject')
BEGIN
    DROP DATABASE Subject   --如果数据库存在先删掉数据库
END
GO

CREATE DATABASE Subject
ON
PRIMARY  --创建主数据库文件
(
    NAME='Subject',
    FILENAME='F:\NProject\Subject\Subject\Subject.Web\App_Data\Subject.mdf',
    SIZE=5MB,
    MaxSize=100MB,
    FileGrowth=1MB
)
LOG ON --创建日志文件
(
    NAME='SubjectLog',
    FileName='F:\NProject\Subject\Subject\Subject.Web\App_Data\SubjectLog.ldf',
    Size=2MB,
    MaxSize=20MB,
    FileGrowth=1MB
)
GO


--添加表
use Subject
/*==============================================================*/
/* Table: OperateSystem                                         */
/*==============================================================*/
create table OperateSystem 
(
   Id                   varchar(40)                    not null,
   Introduction         varchar(1000)                  null,
   ImgUrl               varchar(100)                   null,
   Title                varchar(100)                   null,
   Note                 varchar(200)                   null,
   CreateDt             datetime                       null,
   constraint PK_OPERATESYSTEM primary key clustered (Id)
);


/*==============================================================*/
/* Table: Course                                                */
/*==============================================================*/
create table Course 
(
   Id                   varchar(40)                    not null,
   OsId                 varchar(40)                    null,
   Title                varchar(100)                   null,
   Contents             varchar(1000)                  null,
   ClickCount           numeric                        null,
   Creater              varchar(20)                    null,
   CreateDt             datetime                       null,
   constraint PK_COURSE primary key clustered (Id)
);


/*==============================================================*/
/* Table: Resources                                             */
/*==============================================================*/
create table Resources 
(
   Id                   varchar(40)                    not null,
   CategoryId           varchar(40)                    null,
   Name                 varchar(100)                   null,
   FilePath             varchar(1000)                  null,
   FileType             varchar(50)                    null,
   FileSize             varchar(100)                   null,
   CreateDt             datetime                       null,
   constraint PK_RESOURCES primary key clustered (Id)
);

/*==============================================================*/
/* Table: Posts                                                 */
/*==============================================================*/
create table Posts 
(
   Id                   varchar(40)                    not null,
   Title                varchar(200)                   null,
   Author               varchar(20)                    null,
   Contents             varchar(3000)                  null,
   ReplyCount           numeric                        null,
   ViewCount            numeric                        null,
   CreateDt             datetime                       null,
   constraint PK_POSTS primary key clustered (Id)
);


/*==============================================================*/
/* Table: UserPosts                                             */
/*==============================================================*/
create table UserPosts 
(
   Id                   varchar(40)                    not null,
   PostsId              varchar(40)                    null,
   UserId               varchar(40)                    null,
   Contents             varchar(3000)                  null,
   CreateDt             datetime                       null,
   constraint PK_USERPOSTS primary key clustered (Id)
);


/*==============================================================*/
/* Table: "User"                                                */
/*==============================================================*/
create table Users
(
   Id                   varchar(40)                    null,
   Name                 varchar(20)                    null,
   Password             varchar(20)                    null,
   Sex                  varchar(2)                     null,
   BriefIntroduction    varchar(500)                   null,
   CreateDt             datetime                       null
);


/*==============================================================*/
/* Table: PersonalDynamic                                       */
/*==============================================================*/
create table PersonalDynamic 
(
   Id                   varchar(40)                    not null,
   UserId               varchar(40)                    null,
   Action               varchar(100)                   null,
   CreateDt             datetime                       null,
   constraint PK_PERSONALDYNAMIC primary key clustered (Id)
);


/*==============================================================*/
/* Table: Category                                              */
/*==============================================================*/
create table Category 
(
   Id                   varchar(40)                    not null,
   Name                 varchar(100)                   null,
   CreateDt             datetime                       null,
   constraint PK_CATEGORY primary key clustered (Id)
);
