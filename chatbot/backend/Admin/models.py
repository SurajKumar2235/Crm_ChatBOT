from django.db import models

# Create your models here.

class ProcessedMarkdown(models.Model):
    file_name = models.CharField(max_length=255)
    processed_at = models.DateTimeField(auto_now_add=True)
    status = models.CharField(
        max_length=20,
        choices=[
            ('SUCCESS', 'Success'),
            ('FAILED', 'Failed'),
        ],
        default='SUCCESS'
    )
    error_message = models.TextField(null=True, blank=True)
    vector_store_id = models.CharField(max_length=255)  # To store ChromaDB reference ID

    class Meta:
        ordering = ['-processed_at']

    def __str__(self):
        return f"{self.file_name} - {self.status} at {self.processed_at}"
