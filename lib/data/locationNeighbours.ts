// Geographic neighbours for each location page, nearest first.
// Used for the "Mold Removal in Nearby Areas" links so that, for example,
// Karen links to Ngong Road and Lavington rather than to coastal towns.
// When you add a new location markdown file, add it here too.
export const locationNeighbours: Record<string, string[]> = {
  // Nairobi
  "nairobi": ["westlands", "kilimani", "karen", "lavington", "kileleshwa", "runda"],
  "karen": ["ngong-road", "lavington", "kilimani", "kikuyu", "south-b-south-c", "nairobi"],
  "kilimani": ["kileleshwa", "lavington", "westlands", "ngong-road", "south-b-south-c", "nairobi"],
  "westlands": ["kileleshwa", "lavington", "kilimani", "runda", "kiambu", "nairobi"],
  "lavington": ["kileleshwa", "kilimani", "westlands", "ngong-road", "karen", "nairobi"],
  "kileleshwa": ["kilimani", "lavington", "westlands", "ngong-road", "runda", "nairobi"],
  "runda": ["westlands", "kiambu", "roysambu", "kasarani", "thika-road", "nairobi"],
  "ngong-road": ["kilimani", "karen", "lavington", "kileleshwa", "south-b-south-c", "kikuyu"],
  "south-b-south-c": ["embakasi", "ngong-road", "kilimani", "karen", "kileleshwa", "nairobi"],
  "embakasi": ["south-b-south-c", "kasarani", "thika-road", "roysambu", "ruiru", "nairobi"],
  "kasarani": ["roysambu", "thika-road", "ruiru", "embakasi", "runda", "kiambu"],
  "roysambu": ["kasarani", "thika-road", "ruiru", "runda", "kiambu", "juja"],
  "thika-road": ["roysambu", "kasarani", "ruiru", "juja", "thika", "kiambu"],
  // Kiambu
  "kiambu": ["runda", "ruiru", "limuru", "kikuyu", "thika-road", "juja"],
  "ruiru": ["juja", "thika-road", "kiambu", "kasarani", "roysambu", "thika"],
  "juja": ["ruiru", "thika", "thika-road", "kiambu", "roysambu", "kasarani"],
  "thika": ["juja", "ruiru", "thika-road", "kiambu", "roysambu", "kasarani"],
  "kikuyu": ["limuru", "karen", "kiambu", "ngong-road", "westlands", "lavington"],
  "limuru": ["kikuyu", "kiambu", "westlands", "runda", "naivasha", "ruiru"],
  // Coast
  "mombasa": ["nyali", "kizingo", "bamburi", "likoni", "diani"],
  "nyali": ["bamburi", "mombasa", "kizingo", "likoni", "diani"],
  "bamburi": ["nyali", "mombasa", "kizingo", "likoni", "diani"],
  "kizingo": ["mombasa", "nyali", "likoni", "bamburi", "diani"],
  "likoni": ["diani", "mombasa", "kizingo", "nyali", "bamburi"],
  "diani": ["likoni", "mombasa", "kizingo", "nyali", "bamburi"],
  // Nakuru
  "nakuru": ["nakuru-town", "gilgil", "naivasha", "eldoret", "limuru"],
  "nakuru-town": ["nakuru", "gilgil", "naivasha", "eldoret"],
  "gilgil": ["naivasha", "nakuru", "nakuru-town", "limuru"],
  "naivasha": ["gilgil", "nakuru", "nakuru-town", "limuru", "kikuyu"],
  // Eldoret
  "eldoret": ["eldoret-town", "kapseret", "langas", "nakuru"],
  "eldoret-town": ["eldoret", "langas", "kapseret", "nakuru"],
  "kapseret": ["eldoret", "eldoret-town", "langas", "nakuru"],
  "langas": ["eldoret", "eldoret-town", "kapseret", "nakuru"],
};
