USE [Handel]
GO
/****** Object:  Table [dbo].[FILIALE]    Script Date: 15.11.2017 13:58:44 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FILIALE](
	[RECNUM] [int] IDENTITY(1,1) NOT NULL,
	[NR] [smallint] NOT NULL,
	[BEZ] [char](30) NOT NULL,
	[KURZ_BEZ] [char](13) NOT NULL,
	[OLGA_NR] [char](6) NOT NULL,
	[Handel_NR] [char](6) NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[MIN_STEU]    Script Date: 15.11.2017 13:58:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[MIN_STEU](
	[RECNUM] [int] IDENTITY(1,1) NOT NULL,
	[MIN_STEUER_KZ] [int] NOT NULL,
	[OLGA_STEUER_KZ] [int] NOT NULL,
	[HAN_STEUER_KZ] [int] NOT NULL,
	[BEZEICHNUNG] [char](30) NOT NULL,
	[BETRAG_TO] [numeric](10, 2) NOT NULL,
	[GUELTIG_AB] [date] NOT NULL,
	[GUELTIG_BIS] [date] NOT NULL
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ZOLL]    Script Date: 15.11.2017 13:58:45 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ZOLL](
	[RECNUM] [int] IDENTITY(1,1) NOT NULL,
	[MANDANT] [smallint] NOT NULL,
	[LIEF_FIL] [smallint] NOT NULL,
	[LIEF_DAT] [date] NOT NULL,
	[LIEF_NR] [numeric](10, 0) NOT NULL,
	[KU_NR] [numeric](10, 0) NOT NULL,
	[KU_TA_LFD_NR] [smallint] NOT NULL,
	[KU_FL_LFD_NR] [smallint] NOT NULL,
	[RECH_DAT] [date] NOT NULL,
	[RECH_NR] [numeric](10, 0) NOT NULL,
	[MIN_STEUER_KZ] [smallint] NOT NULL,
	[ZOLL_KZ] [char](2) NOT NULL,
	[MNG_KG_AUSG] [numeric](10, 2) NOT NULL,
	[LAGER_KZ] [smallint] NOT NULL,
	[ZOLL_LIEF_KZ] [smallint] NOT NULL,
	[CUBEWARE_KZ] [char](15) NOT NULL,
	[ANG_BEN] [char](5) NOT NULL,
	[AEN_DAT] [date] NOT NULL,
	[AEN_BEN] [char](5) NOT NULL,
	[MNG_KG_EING] [numeric](10, 2) NOT NULL
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[FILIALE] ON 

INSERT [dbo].[FILIALE] ([RECNUM], [NR], [BEZ], [KURZ_BEZ], [OLGA_NR], [Handel_NR]) VALUES (1, 1, N'Thedinghausen/Dibbersen       ', N'Thedingh.D   ', N'      ', N'      ')
INSERT [dbo].[FILIALE] ([RECNUM], [NR], [BEZ], [KURZ_BEZ], [OLGA_NR], [Handel_NR]) VALUES (2, 2, N'Lübbecke                      ', N'Lübbecke     ', N'      ', N'      ')
INSERT [dbo].[FILIALE] ([RECNUM], [NR], [BEZ], [KURZ_BEZ], [OLGA_NR], [Handel_NR]) VALUES (3, 3, N'Thedinghausen/Bahnhofstr.     ', N'Thedingh.B   ', N'      ', N'      ')
INSERT [dbo].[FILIALE] ([RECNUM], [NR], [BEZ], [KURZ_BEZ], [OLGA_NR], [Handel_NR]) VALUES (4, 4, N'Hamburg                       ', N'Hamburg      ', N'      ', N'      ')
INSERT [dbo].[FILIALE] ([RECNUM], [NR], [BEZ], [KURZ_BEZ], [OLGA_NR], [Handel_NR]) VALUES (5, 5, N'Zeven                         ', N'Zeven        ', N'      ', N'      ')
INSERT [dbo].[FILIALE] ([RECNUM], [NR], [BEZ], [KURZ_BEZ], [OLGA_NR], [Handel_NR]) VALUES (6, 6, N'Schlobohm                     ', N'Schlobohm    ', N'      ', N'      ')
INSERT [dbo].[FILIALE] ([RECNUM], [NR], [BEZ], [KURZ_BEZ], [OLGA_NR], [Handel_NR]) VALUES (7, 7, N'Ilberstedt                    ', N'Ilberstedt   ', N'      ', N'      ')
INSERT [dbo].[FILIALE] ([RECNUM], [NR], [BEZ], [KURZ_BEZ], [OLGA_NR], [Handel_NR]) VALUES (8, 10, N'Rövershagen                   ', N'Rövershagen  ', N'      ', N'      ')
INSERT [dbo].[FILIALE] ([RECNUM], [NR], [BEZ], [KURZ_BEZ], [OLGA_NR], [Handel_NR]) VALUES (9, 11, N'Magdeburg                     ', N'Magdeburg    ', N'      ', N'      ')
SET IDENTITY_INSERT [dbo].[FILIALE] OFF
SET IDENTITY_INSERT [dbo].[MIN_STEU] ON 

INSERT [dbo].[MIN_STEU] ([RECNUM], [MIN_STEUER_KZ], [OLGA_STEUER_KZ], [HAN_STEUER_KZ], [BEZEICHNUNG], [BETRAG_TO], [GUELTIG_AB], [GUELTIG_BIS]) VALUES (1, 0, 0, 0, N'Brenngas                      ', CAST(60.60 AS Numeric(10, 2)), CAST(N'0001-01-01' AS Date), CAST(N'0001-01-01' AS Date))
INSERT [dbo].[MIN_STEU] ([RECNUM], [MIN_STEUER_KZ], [OLGA_STEUER_KZ], [HAN_STEUER_KZ], [BEZEICHNUNG], [BETRAG_TO], [GUELTIG_AB], [GUELTIG_BIS]) VALUES (5, 1, 1, 1, N'Brenngas                      ', CAST(60.60 AS Numeric(10, 2)), CAST(N'0001-01-01' AS Date), CAST(N'0001-01-01' AS Date))
INSERT [dbo].[MIN_STEU] ([RECNUM], [MIN_STEUER_KZ], [OLGA_STEUER_KZ], [HAN_STEUER_KZ], [BEZEICHNUNG], [BETRAG_TO], [GUELTIG_AB], [GUELTIG_BIS]) VALUES (6, 2, 2, 2, N'Brenngas                      ', CAST(60.60 AS Numeric(10, 2)), CAST(N'0001-01-01' AS Date), CAST(N'0001-01-01' AS Date))
INSERT [dbo].[MIN_STEU] ([RECNUM], [MIN_STEUER_KZ], [OLGA_STEUER_KZ], [HAN_STEUER_KZ], [BEZEICHNUNG], [BETRAG_TO], [GUELTIG_AB], [GUELTIG_BIS]) VALUES (10, 10, 10, 10, N'Brenngas                      ', CAST(60.60 AS Numeric(10, 2)), CAST(N'0001-01-01' AS Date), CAST(N'0001-01-01' AS Date))
INSERT [dbo].[MIN_STEU] ([RECNUM], [MIN_STEUER_KZ], [OLGA_STEUER_KZ], [HAN_STEUER_KZ], [BEZEICHNUNG], [BETRAG_TO], [GUELTIG_AB], [GUELTIG_BIS]) VALUES (17, 11, 11, 11, N'Brenngas                      ', CAST(60.60 AS Numeric(10, 2)), CAST(N'0001-01-01' AS Date), CAST(N'0001-01-01' AS Date))
INSERT [dbo].[MIN_STEU] ([RECNUM], [MIN_STEUER_KZ], [OLGA_STEUER_KZ], [HAN_STEUER_KZ], [BEZEICHNUNG], [BETRAG_TO], [GUELTIG_AB], [GUELTIG_BIS]) VALUES (18, 3, 3, 3, N'Treibgas                      ', CAST(180.32 AS Numeric(10, 2)), CAST(N'0001-01-01' AS Date), CAST(N'0001-01-01' AS Date))
INSERT [dbo].[MIN_STEU] ([RECNUM], [MIN_STEUER_KZ], [OLGA_STEUER_KZ], [HAN_STEUER_KZ], [BEZEICHNUNG], [BETRAG_TO], [GUELTIG_AB], [GUELTIG_BIS]) VALUES (19, 5, 5, 5, N'Treibgas                      ', CAST(180.32 AS Numeric(10, 2)), CAST(N'0001-01-01' AS Date), CAST(N'0001-01-01' AS Date))
INSERT [dbo].[MIN_STEU] ([RECNUM], [MIN_STEUER_KZ], [OLGA_STEUER_KZ], [HAN_STEUER_KZ], [BEZEICHNUNG], [BETRAG_TO], [GUELTIG_AB], [GUELTIG_BIS]) VALUES (20, 4, 4, 4, N'Autogas                       ', CAST(180.32 AS Numeric(10, 2)), CAST(N'0001-01-01' AS Date), CAST(N'0001-01-01' AS Date))
INSERT [dbo].[MIN_STEU] ([RECNUM], [MIN_STEUER_KZ], [OLGA_STEUER_KZ], [HAN_STEUER_KZ], [BEZEICHNUNG], [BETRAG_TO], [GUELTIG_AB], [GUELTIG_BIS]) VALUES (21, 6, 6, 6, N'unversteuert                  ', CAST(0.00 AS Numeric(10, 2)), CAST(N'0001-01-01' AS Date), CAST(N'0001-01-01' AS Date))
INSERT [dbo].[MIN_STEU] ([RECNUM], [MIN_STEUER_KZ], [OLGA_STEUER_KZ], [HAN_STEUER_KZ], [BEZEICHNUNG], [BETRAG_TO], [GUELTIG_AB], [GUELTIG_BIS]) VALUES (22, 7, 7, 7, N'unversteuert                  ', CAST(0.00 AS Numeric(10, 2)), CAST(N'0001-01-01' AS Date), CAST(N'0001-01-01' AS Date))
INSERT [dbo].[MIN_STEU] ([RECNUM], [MIN_STEUER_KZ], [OLGA_STEUER_KZ], [HAN_STEUER_KZ], [BEZEICHNUNG], [BETRAG_TO], [GUELTIG_AB], [GUELTIG_BIS]) VALUES (23, 8, 8, 8, N'unversteuert                  ', CAST(0.00 AS Numeric(10, 2)), CAST(N'0001-01-01' AS Date), CAST(N'0001-01-01' AS Date))
INSERT [dbo].[MIN_STEU] ([RECNUM], [MIN_STEUER_KZ], [OLGA_STEUER_KZ], [HAN_STEUER_KZ], [BEZEICHNUNG], [BETRAG_TO], [GUELTIG_AB], [GUELTIG_BIS]) VALUES (24, 9, 9, 9, N'unversteuert                  ', CAST(0.00 AS Numeric(10, 2)), CAST(N'0001-01-01' AS Date), CAST(N'0001-01-01' AS Date))
INSERT [dbo].[MIN_STEU] ([RECNUM], [MIN_STEUER_KZ], [OLGA_STEUER_KZ], [HAN_STEUER_KZ], [BEZEICHNUNG], [BETRAG_TO], [GUELTIG_AB], [GUELTIG_BIS]) VALUES (25, 12, 12, 12, N'unversteuert                  ', CAST(0.00 AS Numeric(10, 2)), CAST(N'0001-01-01' AS Date), CAST(N'0001-01-01' AS Date))
SET IDENTITY_INSERT [dbo].[MIN_STEU] OFF
SET IDENTITY_INSERT [dbo].[ZOLL] ON 

INSERT [dbo].[ZOLL] ([RECNUM], [MANDANT], [LIEF_FIL], [LIEF_DAT], [LIEF_NR], [KU_NR], [KU_TA_LFD_NR], [KU_FL_LFD_NR], [RECH_DAT], [RECH_NR], [MIN_STEUER_KZ], [ZOLL_KZ], [MNG_KG_AUSG], [LAGER_KZ], [ZOLL_LIEF_KZ], [CUBEWARE_KZ], [ANG_BEN], [AEN_DAT], [AEN_BEN], [MNG_KG_EING]) VALUES (2, 1, 1, CAST(N'0001-01-01' AS Date), CAST(5 AS Numeric(10, 0)), CAST(1040 AS Numeric(10, 0)), 0, 0, CAST(N'0001-01-01' AS Date), CAST(0 AS Numeric(10, 0)), 0, N'  ', CAST(100.00 AS Numeric(10, 2)), 0, 0, N'               ', N'     ', CAST(N'0001-01-01' AS Date), N'     ', CAST(0.00 AS Numeric(10, 2)))
INSERT [dbo].[ZOLL] ([RECNUM], [MANDANT], [LIEF_FIL], [LIEF_DAT], [LIEF_NR], [KU_NR], [KU_TA_LFD_NR], [KU_FL_LFD_NR], [RECH_DAT], [RECH_NR], [MIN_STEUER_KZ], [ZOLL_KZ], [MNG_KG_AUSG], [LAGER_KZ], [ZOLL_LIEF_KZ], [CUBEWARE_KZ], [ANG_BEN], [AEN_DAT], [AEN_BEN], [MNG_KG_EING]) VALUES (3, 1, 4, CAST(N'2017-11-16' AS Date), CAST(0 AS Numeric(10, 0)), CAST(1040 AS Numeric(10, 0)), 0, 0, CAST(N'0001-01-01' AS Date), CAST(0 AS Numeric(10, 0)), 0, N'  ', CAST(200.00 AS Numeric(10, 2)), 0, 0, N'               ', N'     ', CAST(N'0001-01-01' AS Date), N'     ', CAST(0.00 AS Numeric(10, 2)))
INSERT [dbo].[ZOLL] ([RECNUM], [MANDANT], [LIEF_FIL], [LIEF_DAT], [LIEF_NR], [KU_NR], [KU_TA_LFD_NR], [KU_FL_LFD_NR], [RECH_DAT], [RECH_NR], [MIN_STEUER_KZ], [ZOLL_KZ], [MNG_KG_AUSG], [LAGER_KZ], [ZOLL_LIEF_KZ], [CUBEWARE_KZ], [ANG_BEN], [AEN_DAT], [AEN_BEN], [MNG_KG_EING]) VALUES (4, 1, 7, CAST(N'0001-01-01' AS Date), CAST(0 AS Numeric(10, 0)), CAST(1040 AS Numeric(10, 0)), 0, 0, CAST(N'0001-01-01' AS Date), CAST(0 AS Numeric(10, 0)), 0, N'  ', CAST(300.00 AS Numeric(10, 2)), 0, 0, N'               ', N'     ', CAST(N'0001-01-01' AS Date), N'     ', CAST(0.00 AS Numeric(10, 2)))
INSERT [dbo].[ZOLL] ([RECNUM], [MANDANT], [LIEF_FIL], [LIEF_DAT], [LIEF_NR], [KU_NR], [KU_TA_LFD_NR], [KU_FL_LFD_NR], [RECH_DAT], [RECH_NR], [MIN_STEUER_KZ], [ZOLL_KZ], [MNG_KG_AUSG], [LAGER_KZ], [ZOLL_LIEF_KZ], [CUBEWARE_KZ], [ANG_BEN], [AEN_DAT], [AEN_BEN], [MNG_KG_EING]) VALUES (5, 1, 10, CAST(N'0001-01-01' AS Date), CAST(0 AS Numeric(10, 0)), CAST(1040 AS Numeric(10, 0)), 0, 0, CAST(N'0001-01-01' AS Date), CAST(0 AS Numeric(10, 0)), 0, N'  ', CAST(400.00 AS Numeric(10, 2)), 0, 0, N'               ', N'     ', CAST(N'0001-01-01' AS Date), N'     ', CAST(0.00 AS Numeric(10, 2)))
SET IDENTITY_INSERT [dbo].[ZOLL] OFF
ALTER TABLE [dbo].[FILIALE] ADD  DEFAULT ((0)) FOR [NR]
GO
ALTER TABLE [dbo].[FILIALE] ADD  DEFAULT ('') FOR [BEZ]
GO
ALTER TABLE [dbo].[FILIALE] ADD  DEFAULT ('') FOR [KURZ_BEZ]
GO
ALTER TABLE [dbo].[FILIALE] ADD  DEFAULT ('') FOR [OLGA_NR]
GO
ALTER TABLE [dbo].[FILIALE] ADD  DEFAULT ('') FOR [Handel_NR]
GO
ALTER TABLE [dbo].[MIN_STEU] ADD  DEFAULT ((0)) FOR [MIN_STEUER_KZ]
GO
ALTER TABLE [dbo].[MIN_STEU] ADD  DEFAULT ((0)) FOR [OLGA_STEUER_KZ]
GO
ALTER TABLE [dbo].[MIN_STEU] ADD  DEFAULT ((0)) FOR [HAN_STEUER_KZ]
GO
ALTER TABLE [dbo].[MIN_STEU] ADD  DEFAULT ('') FOR [BEZEICHNUNG]
GO
ALTER TABLE [dbo].[MIN_STEU] ADD  DEFAULT ((0)) FOR [BETRAG_TO]
GO
ALTER TABLE [dbo].[MIN_STEU] ADD  DEFAULT ('0001-01-01') FOR [GUELTIG_AB]
GO
ALTER TABLE [dbo].[MIN_STEU] ADD  DEFAULT ('0001-01-01') FOR [GUELTIG_BIS]
GO
ALTER TABLE [dbo].[ZOLL] ADD  DEFAULT ((0)) FOR [MANDANT]
GO
ALTER TABLE [dbo].[ZOLL] ADD  DEFAULT ((0)) FOR [LIEF_FIL]
GO
ALTER TABLE [dbo].[ZOLL] ADD  DEFAULT ('0001-01-01') FOR [LIEF_DAT]
GO
ALTER TABLE [dbo].[ZOLL] ADD  DEFAULT ((0)) FOR [LIEF_NR]
GO
ALTER TABLE [dbo].[ZOLL] ADD  DEFAULT ((0)) FOR [KU_NR]
GO
ALTER TABLE [dbo].[ZOLL] ADD  DEFAULT ((0)) FOR [KU_TA_LFD_NR]
GO
ALTER TABLE [dbo].[ZOLL] ADD  DEFAULT ((0)) FOR [KU_FL_LFD_NR]
GO
ALTER TABLE [dbo].[ZOLL] ADD  DEFAULT ('0001-01-01') FOR [RECH_DAT]
GO
ALTER TABLE [dbo].[ZOLL] ADD  DEFAULT ((0)) FOR [RECH_NR]
GO
ALTER TABLE [dbo].[ZOLL] ADD  DEFAULT ((0)) FOR [MIN_STEUER_KZ]
GO
ALTER TABLE [dbo].[ZOLL] ADD  DEFAULT ('') FOR [ZOLL_KZ]
GO
ALTER TABLE [dbo].[ZOLL] ADD  DEFAULT ((0)) FOR [MNG_KG_AUSG]
GO
ALTER TABLE [dbo].[ZOLL] ADD  DEFAULT ((0)) FOR [LAGER_KZ]
GO
ALTER TABLE [dbo].[ZOLL] ADD  DEFAULT ((0)) FOR [ZOLL_LIEF_KZ]
GO
ALTER TABLE [dbo].[ZOLL] ADD  DEFAULT ('') FOR [CUBEWARE_KZ]
GO
ALTER TABLE [dbo].[ZOLL] ADD  DEFAULT ('') FOR [ANG_BEN]
GO
ALTER TABLE [dbo].[ZOLL] ADD  DEFAULT ('0001-01-01') FOR [AEN_DAT]
GO
ALTER TABLE [dbo].[ZOLL] ADD  DEFAULT ('') FOR [AEN_BEN]
GO
ALTER TABLE [dbo].[ZOLL] ADD  DEFAULT ((0)) FOR [MNG_KG_EING]
GO
