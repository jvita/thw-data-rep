# Data proposal: COVID-19

# Summary

Arguably one of the "hottest" data sets right now, the COVID data is being curated and constantly updated by multiple sources (most notably Johns Hopkins University). This data set has multiple relevant traits for our application since it includes time-series data (useful for audio representations), spatial information (useful for visual and physical representations), and can be easily sub-divided (e.g. based on country, demographic, and health regulations) which could make for some interesting comparisons.

Another major advantage of using this data is that it any prototype that we create using it would be much more interesting to the campus-wide community, and could thus greatly improve our club's visibility on campus. However, a serious downside is that unless we're *truly* interested in the data, it may become mentally taxing to work with it. Our lives are almost completely dominated by COVID right now, and it might not be fun to let it become a player in our free time as well. Personally, I think this would still be a fun and interesting way of learning more about the virus, but the possible mental/emotional strain of having to think too much about it is something that people should consider.

---

# Possible representations

## Visual

Geographic maps showing the spread of the virus are an obvious application (see [this webpage by JHU](https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6) for inspiration). While not a particularly novel application, it could provide a good exercise for the visualization and front-end teams to work together.

## Physical

One option would be to encode different features in the data set into properties of a sphere that could then be 3D printed. For example, confirmed_cases → sphere_radius, death_count → surface_texture, country/state → location_on_sphere. If we then sub-divided the data into different countries, for example, then we could have an excellent way of (physically) exploring the similarities/differences between how the virus is spreading through different regions.

## Audio

Since this is time-series data (*and* it should be exponential), then it may be possible to create simple harmonies representing the growth of cases over time. This data *might* be able to avoid some of the issues that other data could encounter during sonification since it might be easier to create something that doesn't just sound like noise. Different countries could be represented with different pitches/tones/etc.

---

# Links

[A git repo](https://github.com/willhaslett/covid-19-growth) for downloading and formatting the JHU and NYT data

The [original JHU repo](https://github.com/CSSEGISandData/COVID-19) with links to visualization dashboards