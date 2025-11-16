import React from 'react';
import { Document, Page, Text, View, StyleSheet, Font, Image } from '@react-pdf/renderer';

// Create professional CV styles for the PDF
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#ffffff',
    padding: 0,
    fontFamily: 'Helvetica',
    fontSize: 11,
    lineHeight: 1.4,
  },
  header: {
    padding: 40,
    marginBottom: 0,
  },
  headerClassic: {
    backgroundColor: '#2c3e50',
    color: '#ffffff',
    textAlign: 'center',
  },
  headerModern: {
    backgroundColor: '#1e3a8a',
    color: '#ffffff',
    textAlign: 'left',
  },
  headerMinimal: {
    backgroundColor: '#ffffff',
    color: '#111827',
    textAlign: 'left',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  headerName: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 12,
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    lineHeight: 1.2,
  },
  headerRole: {
    fontSize: 16,
    marginBottom: 24,
    marginTop: 8,
    color: '#ecf0f1',
    fontWeight: 300,
    fontStyle: 'italic',
    lineHeight: 1.3,
  },
  headerContact: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 40,
    fontSize: 11,
    color: '#bdc3c7',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactLabel: {
    fontWeight: 'bold',
    marginRight: 4,
  },
  content: {
    padding: 40,
    paddingTop: 30,
    flex: 1,
  },
  section: {
    marginBottom: 28,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    paddingBottom: 6,
    marginBottom: 18,
    letterSpacing: 1,
    textTransform: 'uppercase',
  },
  sectionTitleClassic: {
    color: '#2c3e50',
    borderBottomWidth: 1.5,
    borderBottomColor: '#3498db',
  },
  sectionTitleModern: {
    color: '#1e3a8a',
    borderBottomWidth: 1.5,
    borderBottomColor: '#2563eb',
  },
  sectionTitleMinimal: {
    color: '#111827',
    borderBottomWidth: 1,
    borderBottomColor: '#e5e7eb',
  },
  entryContainer: {
    marginBottom: 16,
    paddingLeft: 0,
  },
  experienceContainer: {
    marginBottom: 20,
    paddingBottom: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#ecf0f1',
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 6,
  },
  entryTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#2c3e50',
    flex: 1,
    marginRight: 10,
  },
  entryDate: {
    fontSize: 10,
    color: '#7f8c8d',
    fontWeight: 'bold',
    backgroundColor: '#ecf0f1',
    padding: 3,
    paddingHorizontal: 8,
    borderRadius: 3,
  },
  entrySubtitle: {
    fontSize: 12,
    color: '#34495e',
    fontWeight: 600,
    marginBottom: 6,
    fontStyle: 'italic',
  },
  entryDescription: {
    fontSize: 11,
    color: '#5d6d7e',
    lineHeight: 1.5,
    textAlign: 'justify',
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
  },
  skillItem: {
    fontSize: 11,
    color: '#2c3e50',
    backgroundColor: '#ecf0f1',
    padding: 6,
    paddingHorizontal: 12,
    borderRadius: 12,
    marginBottom: 6,
    marginRight: 6,
    fontWeight: 500,
  },
  bulletPoint: {
    fontSize: 11,
    color: '#34495e',
    marginBottom: 4,
    paddingLeft: 12,
  },
  bulletSymbol: {
    color: '#3498db',
    fontWeight: 'bold',
    marginRight: 6,
  },
  achievementContainer: {
    marginBottom: 14,
    paddingLeft: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#3498db',
    paddingBottom: 8,
  },
  interestItem: {
    fontSize: 11,
    color: '#34495e',
    backgroundColor: '#f8f9fa',
    padding: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginBottom: 4,
    marginRight: 6,
    fontWeight: 400,
  },
  // Modern template specific
  contentRow: {
    flexDirection: 'row',
  },
  sidebar: {
    width: '35%',
    paddingRight: 20,
    borderRightWidth: 1,
    borderRightColor: '#e5e7eb',
  },
  mainColumn: {
    width: '65%',
    paddingLeft: 20,
  },
  sidebarSectionTitle: {
    fontSize: 11,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    color: '#1e3a8a',
    marginBottom: 8,
  },
  sidebarSkillChip: {
    fontSize: 10,
    color: '#1e3a8a',
    backgroundColor: '#eff6ff',
    paddingVertical: 3,
    paddingHorizontal: 8,
    borderRadius: 12,
    marginRight: 4,
    marginBottom: 4,
  },
  sidebarInterestRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  sidebarInterestBullet: {
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#2563eb',
    marginRight: 4,
  },
  sidebarInterestText: {
    fontSize: 10,
    color: '#1e3a8a',
  },
  profileImageWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#bfdbfe',
    marginRight: 12,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
});

const CVPDFDocument = ({ 
  formData, 
  educationData, 
  practicleData, 
  skillsData, 
  achievementsData, 
  interestsData,
  selectedTemplate 
}) => {
  const template = selectedTemplate || 'classic';

  const headerStyle = [
    styles.header,
    template === 'classic'
      ? styles.headerClassic
      : template === 'modern'
      ? styles.headerModern
      : styles.headerMinimal,
  ];

  const sectionTitleStyles =
    template === 'classic'
      ? [styles.sectionTitle, styles.sectionTitleClassic]
      : template === 'modern'
      ? [styles.sectionTitle, styles.sectionTitleModern]
      : [styles.sectionTitle, styles.sectionTitleMinimal];

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={headerStyle}>
          {template === 'modern' ? (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {formData.profileImage && (
                  <View style={styles.profileImageWrapper}>
                    <Image style={styles.profileImage} src={formData.profileImage} />
                  </View>
                )}
                <View>
                  <Text style={styles.headerName}>
                    {formData.name || "Your Name"}
                  </Text>
                  <Text style={styles.headerRole}>
                    {formData.role || "Your Professional Role"}
                  </Text>
                </View>
              </View>
              <View style={styles.headerContact}>
                <View style={styles.contactItem}>
                  <Text style={styles.contactLabel}>EMAIL</Text>
                  <Text>{formData.email || "your.email@example.com"}</Text>
                </View>
                <View style={styles.contactItem}>
                  <Text style={styles.contactLabel}>PHONE</Text>
                  <Text>{formData.phone || "Your Phone Number"}</Text>
                </View>
              </View>
            </View>
          ) : (
            <View>
              <Text style={styles.headerName}>
                {formData.name || "Your Name"}
              </Text>
              <Text style={styles.headerRole}>
                {formData.role || "Your Professional Role"}
              </Text>
              <View style={styles.headerContact}>
                <View style={styles.contactItem}>
                  <Text style={styles.contactLabel}>EMAIL</Text>
                  <Text>{formData.email || "your.email@example.com"}</Text>
                </View>
                <View style={styles.contactItem}>
                  <Text style={styles.contactLabel}>PHONE</Text>
                  <Text>{formData.phone || "Your Phone Number"}</Text>
                </View>
              </View>
            </View>
          )}
        </View>

        {/* Content - Template-specific layout */}
        <View style={styles.content}>
          {template === 'modern' ? (
            <View style={styles.contentRow}>
              <View style={styles.sidebar}>
                <Text style={styles.sidebarSectionTitle}>SKILLS SNAPSHOT</Text>
                <View style={styles.skillsContainer}>
                  {skillsData.map((entry, index) => (
                    <Text key={index} style={styles.sidebarSkillChip}>
                      {entry.skillName || "Skill"}
                    </Text>
                  ))}
                </View>

                <View style={{ marginTop: 16 }}>
                  <Text style={styles.sidebarSectionTitle}>INTERESTS</Text>
                  {interestsData.map((entry, index) => (
                    <View key={index} style={styles.sidebarInterestRow}>
                      <View style={styles.sidebarInterestBullet} />
                      <Text style={styles.sidebarInterestText}>
                        {entry.interest || "Interest"}
                        {entry.category && entry.category !== "Personal" && ` (${entry.category})`}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>

              <View style={styles.mainColumn}>
                <View style={styles.section}>
                  <Text style={sectionTitleStyles}>EDUCATION</Text>
                  {educationData.map((entry, index) => (
                    <View key={index} style={styles.entryContainer}>
                      <View style={styles.entryHeader}>
                        <Text style={styles.entryTitle}>
                          {entry.school || "School Name"}
                        </Text>
                        <Text style={styles.entryDate}>
                          {entry.date || "Date"}
                        </Text>
                      </View>
                      <Text style={styles.entrySubtitle}>
                        {entry.title || "Degree/Title"}
                      </Text>
                    </View>
                  ))}
                </View>

                <View style={styles.section}>
                  <Text style={sectionTitleStyles}>EXPERIENCE</Text>
                  {practicleData.map((entry, index) => (
                    <View key={index} style={styles.experienceContainer}>
                      <View style={styles.entryHeader}>
                        <Text style={styles.entryTitle}>
                          {entry.companyName || "Company Name"}
                        </Text>
                        <Text style={styles.entryDate}>
                          {entry.dateFrom || "Start Date"} - {entry.dateUntil || "End Date"}
                        </Text>
                      </View>
                      <Text style={styles.entrySubtitle}>
                        {entry.positionTitle || "Position Title"}
                      </Text>
                      <Text style={styles.entryDescription}>
                        {entry.mainResponsibilities || "Your main responsibilities and achievements..."}
                      </Text>
                    </View>
                  ))}
                </View>

                <View style={styles.section}>
                  <Text style={sectionTitleStyles}>ACHIEVEMENTS</Text>
                  {achievementsData.map((entry, index) => (
                    <View key={index} style={styles.achievementContainer}>
                      <View style={styles.entryHeader}>
                        <Text style={styles.entryTitle}>
                          {entry.title || "Achievement Title"}
                        </Text>
                        <Text style={styles.entryDate}>
                          {entry.date || "Date"}
                        </Text>
                      </View>
                      <Text style={styles.entryDescription}>
                        {entry.description || "Achievement description..."}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            </View>
          ) : (
            <View>
              {/* Education */}
              <View style={styles.section}>
                <Text style={sectionTitleStyles}>EDUCATION</Text>
                {educationData.map((entry, index) => (
                  <View key={index} style={styles.entryContainer}>
                    <View style={styles.entryHeader}>
                      <Text style={styles.entryTitle}>
                        {entry.school || "School Name"}
                      </Text>
                      <Text style={styles.entryDate}>
                        {entry.date || "Date"}
                      </Text>
                    </View>
                    <Text style={styles.entrySubtitle}>
                      {entry.title || "Degree/Title"}
                    </Text>
                  </View>
                ))}
              </View>

              {/* Experience */}
              <View style={styles.section}>
                <Text style={sectionTitleStyles}>EXPERIENCE</Text>
                {practicleData.map((entry, index) => (
                  <View key={index} style={styles.experienceContainer}>
                    <View style={styles.entryHeader}>
                      <Text style={styles.entryTitle}>
                        {entry.companyName || "Company Name"}
                      </Text>
                      <Text style={styles.entryDate}>
                        {entry.dateFrom || "Start Date"} - {entry.dateUntil || "End Date"}
                      </Text>
                    </View>
                    <Text style={styles.entrySubtitle}>
                      {entry.positionTitle || "Position Title"}
                    </Text>
                    <Text style={styles.entryDescription}>
                      {entry.mainResponsibilities || "Your main responsibilities and achievements..."}
                    </Text>
                  </View>
                ))}
              </View>

              {/* Skills */}
              <View style={styles.section}>
                <Text style={sectionTitleStyles}>SKILLS</Text>
                <View style={styles.skillsContainer}>
                  {skillsData.map((entry, index) => (
                    <Text key={index} style={styles.skillItem}>
                      {entry.skillName || "Skill Name"}
                    </Text>
                  ))}
                </View>
              </View>

              {/* Achievements */}
              <View style={styles.section}>
                <Text style={sectionTitleStyles}>ACHIEVEMENTS</Text>
                {achievementsData.map((entry, index) => (
                  <View key={index} style={styles.achievementContainer}>
                    <View style={styles.entryHeader}>
                      <Text style={styles.entryTitle}>
                        {entry.title || "Achievement Title"}
                      </Text>
                      <Text style={styles.entryDate}>
                        {entry.date || "Date"}
                      </Text>
                    </View>
                    <Text style={styles.entryDescription}>
                      {entry.description || "Achievement description..."}
                    </Text>
                  </View>
                ))}
              </View>

              {/* Interests */}
              <View style={styles.section}>
                <Text style={sectionTitleStyles}>INTERESTS</Text>
                <View style={styles.skillsContainer}>
                  {interestsData.map((entry, index) => (
                    <Text key={index} style={styles.interestItem}>
                      {entry.interest || "Interest"}
                      {entry.category && entry.category !== "Personal" && 
                        ` (${entry.category})`
                      }
                    </Text>
                  ))}
                </View>
              </View>
            </View>
          )}
        </View>
      </Page>
    </Document>
  );
};

export default CVPDFDocument;
