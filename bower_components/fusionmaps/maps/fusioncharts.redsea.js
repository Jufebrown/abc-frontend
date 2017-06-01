/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>

 @author FusionCharts Technologies LLP
 @meta package_map_pack
 @id fusionmaps.RedSea.18.08-13-2012 10:47:02
*/
(function(b){"object"===typeof module&&"undefined"!==typeof module.exports?module.exports=b:b(FusionCharts)})(function(b){b(["private","modules.renderer.js-redsea",function(){var b=this,c=b.hcLib,d=c.chartAPI,h=c.moduleCmdQueue,c=c.injectModuleDependency,a=!!d.geo,f,g,e;f=[{name:"RedSea",revision:18,standaloneInit:!0,baseWidth:438,baseHeight:594,baseScaleFactor:10,entities:{"01":{outlines:[["M",1874,1563,"L",1860,1563,1860,1571,1861,1573,1857,1573,1857,1585,"Q",1853,1583,1850,1583,1847,1583,1848,
1593,"L",1853,1593,"Q",1849,1606,1865,1605,1859,1624,1882,1618,1882,1628,1893,1625,"L",1893,1636,1929,1636,"Q",1926,1629,1926,1613,"L",1905,1613,1905,1618,1893,1618,1892,1601,1886,1601,"Q",1886,1587,1886,1581,1885,1571,1874,1574,"Z"],["M",1631,1282,"L",1631,1276,1627,1276,1626,1282,1626,1293,1634,1292,"Q",1632,1296,1635,1301,1639,1306,1644,1303,"L",1646,1312,1654,1312,1654,1295,1645,1295,"Q",1652,1277,1631,1282,"Z"],["M",1615,1208,"L",1615,1234,1617,1232,1624,1232,"Q",1624,1245,1634,1243,"L",1634,
1253,"Q",1640,1252,1645,1256,1651,1260,1649,1268,1658,1268,1664,1282,1665,1283,1671,1291,1675,1300,1688,1300,1689,1282,1690,1282,"L",1690,1271,"Q",1675,1275,1676,1257,1646,1261,1655,1240,"L",1643,1240,1643,1232,1633,1232,"Q",1635,1222,1623,1221,"L",1623,1210,"Q",1618,1210,1615,1208,"Z"],["M",1877,1345,"Q",1874,1347,1874,1348,1874,1352,1879,1355,"L",1879,1362,1870,1362,"Q",1869,1361,1865,1361,1865,1362,1864,1362,"L",1864,1370,1886,1370,"Q",1886,1380,1887,1382,1916,1382,1918,1386,1922,1395,1930,1394,
1937,1399,1945,1399,1944,1402,1947,1406,1951,1411,1956,1408,1953,1413,1956,1415,1957,1415,1961,1417,"L",1973,1417,"Q",1973,1398,1969,1395,1966,1392,1961,1374,1953,1376,1948,1376,1939,1375,1941,1367,"L",1926,1366,1926,1351,1907,1351,1907,1345,"Z"],["M",1737,1273,"Q",1737,1286,1736,1295,"L",1723,1295,1723,1304,1717,1304,"Q",1715,1303,1708,1303,"L",1708,1314,1716,1314,"Q",1715,1322,1723,1323,1724,1323,1726,1323,1730,1323,1736,1323,"L",1736,1329,"Q",1731,1326,1723,1330,1716,1334,1716,1336,1716,1342,1726,
1341,1726,1345,1727,1350,1723,1348,1719,1352,1715,1356,1716,1362,1711,1363,1710,1359,"L",1705,1359,1704,1370,1753,1370,1753,1363,1747,1363,1745,1350,1745,1341,"Q",1749,1341,1755,1344,1764,1344,1765,1340,1766,1339,1766,1326,1765,1325,1764,1324,"L",1766,1324,1775,1324,1775,1313,"Q",1765,1298,1761,1301,1761,1290,1760,1287,"L",1754,1287,1754,1273,"Z"],["M",1716,1205,"L",1716,1225,1723,1225,1723,1237,1714,1237,1714,1246,1708,1246,1708,1236,1695,1236,"Q",1695,1216,1686,1216,1683,1218,1682,1218,"L",1682,
1201,1675,1201,1675,1187,1666,1187,1666,1174,"Q",1657,1167,1657,1185,"L",1657,1197,"Q",1658,1197,1665,1203,1665,1214,1677,1219,1679,1226,1681,1227,1685,1231,1686,1235,"L",1686,1259,1706,1259,1706,1252,"Q",1712,1252,1725,1251,"L",1725,1243,1732,1243,1732,1218,1731,1216,1726,1216,"Q",1726,1208,1725,1205,"Z"],["M",1772,1227,"L",1765,1227,"Q",1763,1218,1758,1219,"L",1758,1212,1761,1212,1761,1201,1745,1201,1745,1203,"Q",1747,1213,1743,1218,"L",1743,1224,"Q",1745,1223,1748,1221,1754,1221,1754,1227,1754,
1236,1754,1240,1755,1241,1755,1242,1756,1248,1756,1262,1759,1263,1766,1263,"L",1766,1273,1776,1273,1776,1284,1789,1281,"Q",1790,1274,1793,1271,"L",1793,1254,"Q",1784,1254,1783,1242,1784,1227,1782,1221,"L",1772,1221,"Z"],["M",1826,1301,"L",1835,1301,1835,1323,1831,1323,1831,1333,1829,1333,"Q",1827,1331,1815,1331,"L",1815,1330,"Q",1816,1328,1816,1323,"L",1804,1323,"Q",1804,1334,1803,1339,1814,1346,1819,1346,1824,1346,1836,1342,"L",1836,1334,1841,1334,1841,1315,1846,1315,1846,1296,"Q",1843,1295,1836,
1295,1829,1295,1826,1296,"Z"],["M",1638,1163,"L",1627,1163,1626,1164,1626,1166,"Q",1626,1185,1627,1193,"L",1634,1192,"Q",1632,1187,1633,1180,1634,1172,1642,1175,"L",1642,1166,"Q",1641,1166,1638,1163,"Z"],["M",1660,1139,"Q",1661,1139,1661,1155,"L",1666,1154,1666,1166,1675,1166,1675,1144,1689,1142,1689,1133,1678,1133,"Q",1679,1130,1675,1126,1669,1134,1670,1136,1660,1137,1659,1138,"Z"],["M",1655,1103,"L",1652,1103,1645,1104,1645,1115,"Q",1641,1115,1638,1117,"L",1638,1127,1648,1128,1648,1142,1655,1142,
"Q",1655,1138,1654,1138,"L",1654,1130,1665,1130,1665,1115,"Q",1660,1114,1656,1114,"Z"],["M",3856,5444,"L",3856,5438,3853,5438,3853,5444,3856,5451,"Q",3855,5457,3860,5457,3865,5457,3864,5451,3866,5451,3871,5447,"L",3871,5444,"Q",3868,5443,3863,5443,"Z"],["M",3875,5413,"L",3874,5402,3867,5402,"Q",3865,5404,3865,5405,3865,5408,3867,5417,3868,5431,3870,5431,3876,5431,3875,5423,"L",3884,5423,3884,5413,"Z"],["M",3629,5261,"Q",3622,5261,3622,5273,"L",3615,5273,3615,5292,"Q",3616,5293,3623,5293,3635,5296,
3635,5285,"L",3644,5285,3644,5272,3639,5272,"Q",3638,5273,3636,5273,"L",3636,5261,"Z"],["M",3666,5263,"L",3666,5301,3646,5301,3646,5312,"Q",3653,5313,3656,5318,3657,5323,3664,5323,3680,5323,3675,5312,"L",3682,5312,3682,5321,3715,5321,"Q",3715,5318,3714,5316,"L",3714,5312,3722,5312,3722,5306,"Q",3713,5307,3708,5304,3701,5301,3696,5301,"L",3696,5294,"Q",3705,5295,3703,5284,"L",3714,5284,3714,5267,3714,5265,3704,5265,3704,5273,3695,5272,"Q",3694,5276,3692,5282,"L",3687,5282,3687,5277,"Q",3681,5276,3676,
5277,"L",3676,5263,"Z"],["M",3686,5259,"L",3702,5259,"Q",3704,5252,3710,5253,3714,5253,3725,5253,"L",3725,5244,3735,5244,3735,5234,3724,5234,3724,5240,3715,5240,"Q",3716,5236,3711,5230,"L",3706,5230,"Q",3706,5233,3705,5234,3704,5243,3697,5244,3691,5245,3695,5253,"L",3685,5253,"Z"],["M",3852,5305,"Q",3854,5296,3848,5295,3840,5295,3835,5294,3831,5308,3847,5305,"L",3847,5317,3857,5317,3856,5326,"Q",3860,5326,3866,5326,"L",3866,5332,3875,5332,3877,5343,3896,5343,3896,5336,"Q",3883,5336,3883,5326,3883,
5318,3872,5324,3874,5308,3861,5314,"L",3861,5306,"Q",3859,5305,3852,5305,"Z"],["M",3832,5255,"Q",3827,5255,3825,5254,3825,5258,3824,5259,"L",3824,5267,3834,5267,3834,5273,3845,5273,"Q",3846,5276,3847,5281,"L",3866,5281,3866,5274,"Q",3852,5271,3847,5270,"L",3847,5261,3835,5261,"Q",3837,5256,3832,5255,"Z"],["M",3765,5230,"Q",3764,5227,3764,5218,"L",3759,5218,3759,5213,3747,5213,3747,5222,3755,5224,"Q",3755,5231,3756,5234,"L",3754,5235,"Q",3753,5234,3744,5234,"L",3744,5250,"Q",3746,5252,3748,5252,3750,
5252,3752,5251,"L",3752,5242,3777,5242,3777,5248,"Q",3785,5247,3786,5253,"L",3796,5253,3795,5261,3811,5261,3811,5254,3806,5254,"Q",3810,5242,3784,5242,"L",3784,5230,"Z"],["M",3356,5132,"L",3356,5145,"Q",3359,5144,3366,5144,"L",3365,5146,3365,5155,3375,5155,"Q",3373,5163,3376,5168,3380,5175,3388,5171,3388,5133,3369,5140,"L",3369,5132,"Z"],["M",3333,4873,"L",3323,4873,3323,4883,3315,4883,3316,4895,"Q",3318,4896,3323,4897,3328,4899,3326,4904,"L",3334,4904,3334,4915,"Q",3353,4913,3346,4923,"L",3366,4923,
3366,4934,3375,4934,"Q",3378,4933,3379,4932,"L",3379,4911,"Q",3368,4911,3358,4910,"L",3358,4904,"Q",3351,4904,3349,4904,3349,4896,3344,4896,"L",3344,4887,"Q",3340,4886,3333,4886,"Z"],["M",3242,4892,"Q",3245,4895,3248,4896,"L",3271,4896,3271,4876,"Q",3268,4872,3268,4869,"L",3256,4869,3256,4883,3242,4883,"Z"],["M",3766,5134,"L",3766,5142,"Q",3770,5142,3780,5142,3788,5143,3785,5153,"L",3799,5153,"Q",3805,5142,3805,5142,3809,5142,3815,5143,"L",3817,5152,3825,5152,3828,5149,3828,5134,"Z"],["M",4103,5664,
"Q",4105,5674,4113,5674,4116,5683,4124,5683,4131,5683,4136,5677,4123,5677,4121,5669,4120,5668,4120,5654,"L",4111,5654,4111,5647,"Q",4111,5645,4114,5644,"L",4104,5644,"Q",4094,5644,4096,5646,"Q",4102,5654,4103,5664,"Z"],["M",4296,5807,"L",4310,5807,4310,5794,"Q",4307,5795,4304,5793,4301,5791,4301,5788,"L",4286,5788,4286,5800,4284,5800,4283,5800,"Q",4286,5801,4296,5801,"Z"],["M",4274,5754,"Q",4272,5752,4272,5751,"L",4255,5751,4255,5760,4257,5761,4267,5762,4267,5771,4274,5771,"Z"],["M",4086,5621,"L",
4086,5634,4096,5634,"Q",4097,5620,4097,5614,"L",4106,5614,4106,5593,4098,5593,"Q",4094,5594,4085,5594,"L",4085,5604,4078,5604,4078,5619,"Q",4079,5620,4086,5621,"Z"],["M",4034,5553,"L",4016,5552,4015,5544,"Q",4012,5545,4004,5545,4003,5552,4001,5557,"L",4002,5562,"Q",4020,5555,4023,5569,4027,5585,4042,5582,"L",4042,5568,4035,5568,"Z"],["M",3084,3904,"L",3072,3904,3072,3922,3066,3922,3064,3945,"Q",3065,3945,3065,3946,"L",3072,3946,3072,3952,3092,3952,3092,3943,3076,3943,"Q",3075,3941,3075,3939,3075,
3933,3084,3909,"Z"],["M",2895,3712,"Q",2892,3719,2900,3720,2904,3720,2914,3721,"L",2914,3713,2906,3712,2906,3702,2896,3702,2897,3696,"Q",2897,3691,2885,3691,"L",2885,3705,2891,3704,2891,3712,"Z"],["M",2884,3683,"L",2884,3666,"Q",2876,3663,2875,3663,2880,3652,2866,3647,"L",2866,3665,2872,3665,"Q",2871,3673,2870,3673,2877,3670,2877,3683,"L",2877,3683,"Z"],["M",2334,2767,"Q",2326,2751,2322,2748,"L",2309,2748,"Q",2307,2748,2301,2740,2294,2744,2292,2736,2291,2727,2290,2725,2281,2712,2282,2701,2283,2691,
2275,2678,2269,2665,2263,2658,2256,2654,2254,2650,2255,2641,2252,2639,2239,2631,2233,2627,2223,2619,2221,2609,2217,2610,2212,2595,2202,2588,2202,2582,2200,2569,2195,2565,2192,2553,2190,2547,2181,2537,2177,2533,2175,2531,2170,2514,2163,2508,2159,2497,2154,2488,2148,2486,2133,2459,2133,2459,2123,2441,2117,2426,2111,2412,2112,2403,2113,2395,2104,2388,2096,2381,2091,2378,2091,2350,2090,2348,2084,2337,2074,2329,2057,2299,2048,2289,2024,2262,2016,2248,2006,2211,2003,2198,2002,2195,1987,2177,1983,2174,1975,
2156,1966,2137,1963,2135,1958,2120,1954,2114,1941,2096,1918,2081,1905,2079,1899,2070,1893,2062,1892,2055,"L",1889,2016,1890,2009,"Q",1890,2003,1897,2002,"L",1897,1988,1915,1988,"Q",1916,1991,1916,1999,"L",1925,1999,1925,2022,1936,2022,1936,2029,1943,2029,"Q",1947,2025,1947,2017,"L",1947,2011,"Q",1937,2009,1933,2009,"L",1933,1972,1889,1972,1888,1941,"Q",1888,1934,1901,1929,1898,1923,1903,1917,1909,1910,1909,1908,"L",1932,1908,"Q",1932,1909,1930,1912,"L",1930,1918,1943,1918,1943,1892,1935,1892,"Q",
1934,1888,1934,1881,"L",1928,1880,"Q",1926,1880,1926,1881,"L",1912,1881,1912,1859,1907,1859,"Q",1901,1861,1900,1861,1902,1847,1890,1850,"L",1890,1835,"Q",1890,1835,1878,1829,1877,1819,1877,1800,"L",1869,1800,1869,1779,1857,1779,"Q",1850,1780,1850,1775,"L",1850,1762,"Q",1860,1761,1860,1756,1851,1747,1851,1738,1851,1732,1847,1730,1842,1728,1840,1724,1837,1719,1817,1719,1809,1708,1800,1703,"L",1802,1636,"Q",1810,1626,1821,1629,1820,1622,1830,1621,1835,1621,1845,1621,"L",1845,1604,1833,1604,1833,1614,
1821,1614,"Q",1818,1609,1812,1610,"L",1812,1601,1817,1601,1817,1592,"Q",1812,1591,1809,1585,1805,1578,1802,1576,1793,1578,1785,1570,1775,1568,1768,1563,1753,1560,1748,1553,1744,1546,1733,1544,1717,1543,1713,1540,1708,1530,1702,1526,1693,1520,1689,1516,1687,1506,1684,1496,1681,1462,1675,1455,"L",1654,1425,"Q",1632,1416,1630,1398,1629,1385,1621,1381,1612,1377,1610,1372,1605,1374,1598,1362,1592,1351,1583,1356,"L",1582,1345,"Q",1582,1337,1584,1333,"L",1584,1308,1571,1307,"Q",1558,1275,1549,1275,1547,
1269,1547,1266,"L",1532,1266,1532,1244,1538,1244,1538,1238,1545,1238,1545,1232,"Q",1549,1231,1552,1228,"L",1566,1228,"Q",1561,1239,1582,1242,"L",1580,1246,1580,1251,"Q",1589,1251,1593,1252,1592,1254,1592,1260,"L",1602,1260,"Q",1601,1256,1601,1244,"L",1596,1244,"Q",1596,1239,1593,1235,1589,1229,1584,1232,1584,1225,1583,1223,"L",1573,1223,"Q",1570,1215,1570,1211,"L",1562,1211,"Q",1564,1207,1564,1197,1574,1199,1575,1191,1573,1180,1573,1177,"L",1585,1177,1585,1155,1578,1155,1578,1165,1543,1167,1543,1158,
"Q",1536,1158,1534,1157,"L",1534,1136,1524,1136,1524,1123,1514,1123,1514,1109,1543,1109,"Q",1542,1122,1551,1123,1557,1124,1568,1122,1573,1122,1575,1125,1576,1127,1577,1130,1577,1131,1583,1134,1586,1136,1585,1140,1607,1143,1605,1161,"L",1622,1161,1622,1145,"Q",1610,1143,1612,1138,"L",1603,1138,"Q",1608,1099,1585,1080,"L",1581,1080,"Q",1581,1065,1575,1056,1568,1048,1564,1042,1562,1038,1536,1009,1520,982,1511,976,1480,961,1476,954,1464,935,1439,937,1430,938,1425,934,1416,929,1416,929,1403,925,1399,918,
1385,894,1377,885,1354,868,1351,859,1331,860,1325,851,1320,847,1319,842,1320,831,1318,829,1292,805,1282,793,1253,771,1251,758,1249,748,1224,722,1215,712,1204,674,1202,669,1197,667,1188,663,1186,661,1173,647,1167,644,1161,627,1157,623,1155,621,1145,603,1128,577,1120,570,1120,570,1119,569,1106,568,1093,553,1079,537,1075,534,1070,532,1059,517,1052,508,1046,508,1018,505,1014,494,1012,464,1006,459,1001,453,1E3,443,999,431,995,427,994,404,988,396,985,393,977,365,966,347,961,338,949,315,942,316,918,318,
907,303,895,282,884,272,860,252,859,248,859,240,854,232,848,223,848,218,848,208,831,193,812,176,810,169,"L",810,140,"Q",814,132,823,134,"L",823,120,"Q",810,118,810,111,810,107,816,102,823,97,828,100,824,85,838,89,"L",837,75,"Q",837,67,845,71,"L",845,61,"Q",841,56,842,45,830,43,833,36,"L",824,36,"Q",823,41,823,48,"L",799,48,"Q",795,41,785,40,775,40,774,40,737,43,715,43,707,61,690,67,675,71,658,86,639,101,617,99,603,97,595,101,585,106,576,106,558,107,534,121,524,127,511,127,505,127,500,132,496,137,
492,137,476,137,452,146,424,158,409,161,290,166,214,166,213,178,212,202,210,206,202,213,196,219,196,227,190,232,174,248,"L",159,253,"Q",149,261,147,267,141,275,125,288,112,300,104,312,99,320,84,335,71,350,71,366,71,384,77,393,82,402,82,433,82,465,80,471,77,484,60,500,44,515,42,528,43,530,36,544,33,547,29,559,"L",29,607,"Q",37,615,38,618,"L",38,633,"Q",45,640,53,652,60,660,69,676,77,690,84,695,86,697,116,727,148,758,164,758,179,758,201,745,222,733,234,729,246,726,300,723,324,720,371,708,412,695,451,
700,489,700,532,728,542,728,556,743,573,761,584,766,605,776,639,808,681,837,731,910,742,922,770,958,798,992,817,1006,830,1015,852,1061,856,1071,868,1091,870,1096,872,1106,874,1115,881,1120,"L",881,1136,"Q",886,1141,889,1156,891,1168,901,1168,"L",901,1205,827,1205,827,1229,"Q",841,1243,842,1254,844,1269,849,1284,848,1296,859,1309,861,1322,859,1350,"L",859,1394,"Q",858,1401,839,1437,820,1481,790,1508,790,1519,784,1518,779,1517,779,1526,779,1537,780,1537,781,1538,793,1542,791,1548,795,1554,799,1561,
799,1567,799,1573,810,1591,812,1602,817,1615,817,1618,830,1638,836,1647,840,1661,"L",858,1702,"Q",861,1708,869,1721,871,1731,881,1745,882,1754,891,1767,894,1794,895,1794,896,1797,901,1819,903,1829,909,1842,907,1864,920,1894,919,1921,919,1943,920,1965,907,1965,"L",907,1977,"Q",931,1980,958,1985,985,1990,999,1994,1013,1999,1025,2009,1067,2037,1115,2084,1125,2094,1154,2114,1180,2132,1193,2149,1205,2163,1232,2188,1255,2215,1278,2216,1299,2216,1302,2210,1321,2212,1324,2206,1326,2201,1343,2197,1345,2194,
1352,2187,"L",1366,2187,"Q",1383,2187,1387,2201,1395,2225,1399,2230,1408,2243,1429,2280,"L",1429,2287,"Q",1459,2333,1517,2443,1532,2470,1560,2521,1577,2549,1581,2557,1582,2560,1600,2593,1600,2601,1552,2645,1549,2649,1535,2656,1534,2657,1524,2670,1514,2681,1501,2701,1480,2726,1474,2737,1456,2771,1452,2775,1429,2795,1429,2810,1430,2826,1425,2834,1421,2842,1421,2851,1421,2887,1429,2898,1435,2906,1465,2936,1486,2957,1509,2973,1532,2988,1532,3020,1532,3052,1531,3060,"L",1531,3099,"Q",1534,3113,1534,3157,
1533,3195,1542,3216,"L",1542,3468,"Q",1544,3471,1547,3476,"L",1558,5237,"Q",1564,5265,1568,5342,"L",1571,5898,1685,5898,"Q",1722,5902,1770,5902,1818,5903,1852,5903,1887,5904,1947,5902,2008,5901,2044,5900,2080,5899,2240,5899,2401,5899,2602,5893,"L",2841,5883,"Q",2954,5884,3081,5887,3085,5888,3089,5888,3107,5888,3161,5888,3179,5889,3206,5877,"L",3264,5877,"Q",3297,5879,3363,5878,3429,5877,3466,5890,3577,5888,3636,5888,3696,5889,3744,5893,3792,5897,3813,5898,3835,5899,3842,5899,3858,5898,3911,5897,"L",
3920,5897,"Q",4148,5903,4235,5903,4336,5903,4345,5900,"L",4345,5895,"Q",4343,5894,4335,5894,4336,5881,4312,5885,4312,5854,4309,5839,4308,5831,4292,5825,4276,5819,4275,5816,"L",4247,5788,"Q",4233,5788,4232,5756,4218,5757,4221,5747,"L",4209,5748,"Q",4209,5755,4187,5755,4168,5755,4170,5747,4157,5751,4152,5729,4142,5729,4134,5721,4127,5714,4116,5701,4105,5688,4104,5683,4103,5678,4088,5675,4073,5672,4069,5661,4066,5650,4049,5653,"L",4049,5644,4004,5625,"Q",3998,5614,3991,5615,3981,5615,3968,5614,3965,
5608,3954,5605,3943,5602,3940,5593,3937,5584,3935,5568,3929,5536,3928,5535,3916,5535,3910,5535,3899,5534,3901,5523,3854,5512,3847,5494,"L",3842,5494,"Q",3840,5489,3840,5483,3829,5477,3829,5473,3824,5465,3824,5458,"L",3825,5425,"Q",3817,5427,3815,5421,3815,5414,3814,5411,3807,5413,3802,5407,3796,5402,3798,5398,3801,5397,3807,5397,"L",3807,5392,"Q",3802,5373,3783,5377,"L",3783,5360,3796,5360,3796,5353,3777,5353,3777,5365,3748,5365,3748,5361,"Q",3749,5351,3749,5332,"L",3737,5332,3737,5324,3717,5324,
3717,5332,3726,5334,3726,5344,3699,5344,"Q",3696,5343,3692,5336,"L",3642,5335,"Q",3635,5335,3633,5331,3630,5327,3627,5327,3603,5324,3583,5324,"L",3583,5315,"Q",3559,5313,3556,5313,3559,5315,3534,5318,3533,5318,3533,5318,3517,5318,3520,5307,"L",3501,5307,"Q",3506,5298,3497,5294,3489,5290,3483,5292,"L",3482,5277,"Q",3461,5280,3448,5261,3433,5239,3424,5236,3424,5210,3413,5213,3414,5209,3412,5201,3410,5193,3406,5194,"L",3406,5174,3396,5174,"Q",3396,5179,3394,5191,"L",3396,5195,3396,5206,3392,5206,"Q",
3392,5201,3383,5202,"L",3383,5191,"Q",3377,5192,3376,5185,3373,5169,3362,5174,3362,5169,3350,5158,"L",3350,5147,"Q",3351,5147,3351,5144,"L",3341,5146,"Q",3334,5146,3326,5136,3314,5121,3310,5115,3310,5114,3309,5113,"L",3299,5030,"Q",3286,5013,3284,4997,3284,4991,3273,4963,3240,4920,3231,4899,3231,4870,3224,4862,3207,4832,3207,4831,3207,4827,3211,4824,"L",3211,4772,"Q",3211,4761,3206,4754,3199,4745,3197,4734,3197,4729,3176,4702,3157,4676,3157,4665,3157,4651,3163,4646,3169,4642,3169,4632,"L",3167,4589,
"Q",3161,4566,3161,4550,3161,4540,3162,4539,3163,4537,3174,4538,3179,4525,3179,4514,3179,4506,3173,4498,3167,4490,3167,4475,3167,4460,3176,4451,"L",3176,4427,"Q",3157,4426,3149,4424,"L",3149,4377,3161,4377,"Q",3161,4361,3164,4354,"L",3163,4294,"Q",3174,4297,3176,4287,3176,4275,3176,4272,"L",3205,4272,3206,4277,3206,4283,"Q",3191,4278,3197,4294,3192,4293,3190,4293,3187,4293,3187,4299,3188,4304,3184,4304,"L",3177,4304,3177,4312,3195,4312,3195,4303,3205,4303,3205,4293,3226,4293,3226,4302,"Q",3241,4298,
3237,4309,"L",3246,4309,"Q",3280,4309,3296,4308,3296,4320,3306,4321,3311,4322,3319,4321,"L",3335,4321,"Q",3340,4321,3342,4317,3343,4313,3347,4313,3367,4312,3369,4301,3376,4301,3374,4307,"L",3385,4307,3385,4322,"Q",3389,4319,3392,4324,3395,4327,3393,4332,"L",3414,4332,3414,4325,"Q",3404,4325,3406,4313,"L",3396,4313,"Q",3402,4285,3388,4284,3388,4280,3380,4277,3374,4275,3376,4267,3351,4271,3357,4255,"L",3341,4255,"Q",3331,4259,3330,4246,"L",3272,4246,"Q",3273,4235,3264,4235,"L",3252,4236,3252,4202,"Q",
3243,4192,3239,4182,3216,4161,3209,4143,"L",3204,4143,"Q",3205,4152,3198,4152,3191,4152,3185,4143,3178,4134,3174,4134,"L",3162,4136,"Q",3160,4136,3151,4129,3139,4128,3136,4125,3128,4110,3122,4100,3119,4092,3117,4088,3109,4084,3109,4080,3108,4067,3100,4055,3099,4038,3087,4030,3078,4024,3065,4008,3056,3992,3051,3987,3035,3973,3029,3966,3023,3959,3005,3952,2991,3946,2985,3942,"L",2985,3941,"Q",2969,3934,2969,3934,"L",2969,3925,2977,3925,2977,3918,2983,3918,2983,3904,2969,3904,"Q",2968,3905,2967,3917,
"L",2951,3915,"Q",2947,3911,2945,3906,2934,3884,2914,3859,2902,3844,2897,3841,2876,3840,2873,3830,"L",2873,3824,"Q",2878,3814,2881,3811,"L",2881,3799,2888,3799,2888,3792,2898,3792,2898,3785,2888,3785,"Q",2888,3776,2884,3775,2878,3768,2876,3767,2871,3764,2871,3755,2871,3748,2863,3748,2862,3748,2847,3734,2841,3729,2841,3708,2841,3697,2832,3691,"L",2832,3677,2834,3664,"Q",2834,3651,2831,3648,2822,3644,2822,3641,2820,3633,2812,3627,2804,3622,2803,3621,2780,3598,2765,3582,2748,3562,2750,3531,2750,3517,
2742,3506,2731,3492,2730,3486,2718,3486,2711,3469,"L",2712,3436,"Q",2712,3427,2706,3421,2697,3412,2697,3411,2688,3407,2688,3403,2686,3389,2686,3389,2679,3375,2674,3368,2664,3341,2650,3320,2636,3292,2613,3264,2591,3237,2588,3224,2584,3211,2572,3195,2560,3179,2558,3174,2555,3168,2551,3159,2547,3150,2542,3134,2535,3114,2513,3098,"L",2512,3091,"Q",2510,3076,2506,3067,2500,3047,2497,3043,2490,3025,2484,3019,2471,3006,2470,3001,2460,2983,2459,2974,2463,2953,2458,2946,2456,2943,2425,2917,2421,2914,2421,
2904,2421,2893,2420,2889,2409,2877,2402,2869,2401,2848,2398,2843,2385,2827,2382,2824,2376,2809,2369,2802,2353,2788,2350,2786,"Q",2341,2782,2334,2767,"Z"]],label:"Red Sea",shortLabel:"RS",labelPosition:[232.1,464.5],labelAlignment:["center","middle"]}}}];e=f.length;if(a)for(;e--;)a=f[e],d(a.name.toLowerCase(),a,d.geo);else for(;e--;)a=f[e],g=a.name.toLowerCase(),c("maps",g,1),h.maps.unshift({cmd:"_call",obj:window,args:[function(a,c){d.geo?d(a,c,d.geo):b.raiseError(b.core,"12052314141","run","JavaScriptRenderer~Maps._call()",
Error("FusionCharts.HC.Maps.js is required in order to define vizualization"))},[g,a],window]})}])});
